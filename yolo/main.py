import cv2
import numpy as np

import matplotlib.pyplot as plt
from matplotlib.colors import LogNorm

from ultralytics import YOLO

# ==== CONFIG ====
input_path  = "input.mp4"      # 🔹 Path to your input video
output_path = "output.mp4"     # 🔹 Path where annotated video will be saved
model_path  = "yolov8n.pt"     # 🔹 YOLOv8 model (n=fastest, s/m/l/x=bigger)
confidence  = 0.3             # 🔹 Detection confidence threshold
device      = "cuda"               # 🔹 "", "cpu", "cuda", or GPU index ("0")

# =================

# Load YOLOv8 model
model = YOLO(model_path)

# Open the input video
cap = cv2.VideoCapture(input_path)
if not cap.isOpened():
    raise RuntimeError(f"❌ Could not open video: {input_path}")

# Get video properties
fps    = cap.get(cv2.CAP_PROP_FPS) or 30.0
width  = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

# Create a VideoWriter to save the output
fourcc = cv2.VideoWriter_fourcc(*"mp4v")  # mp4v ensures .mp4 output
out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

# Create matrix for heatmap
heatmap = np.zeros((round(height), round(width)))
heatmap+=0.1
im = plt.imshow(heatmap, cmap='inferno', norm=LogNorm())

# Process frames
counter = 0
while True:
    counter+=1
    ret, frame = cap.read()
    if not ret:
        break

    # Run YOLOv8 inference
    results = model(frame, conf=confidence, device=device)

    # Annotate detections (filter to "person" class id 0)
    for r in results:
        for box, cls, conf in zip(r.boxes.xyxy, r.boxes.cls, r.boxes.conf):
            if int(cls) == 0:  # class 0 = person
                x1, y1, x2, y2 = map(int, box)
                heatmap[round(y1)][round(x1)] += 1
                label = f"Person {conf:.2f}"
                cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                cv2.putText(frame, label, (x1, max(y1 - 10, 20)),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2)

    # Write the frame to the output video

    if(counter%240==0):
        im = plt.imshow(heatmap, cmap='inferno', norm=LogNorm())
        plt.savefig("out.png")
    out.write(frame)

plt.colorbar(im)
plt.show()
cap.release()
out.release()
print(f"✅ Saved annotated video to: {output_path}")


