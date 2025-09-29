"use client"
import Sidebar from "!/Sidebar"

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />
			<div style={{height:"100vh"}} className="w-full flex flex-col justiy-center items-center">
				<div className="mb-50">
					<h1 className="font-bold text-6xl mt-50">Modelos disponíveis</h1>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col justify-center mr-5">
						<button onClick={()=>{window.location.href="/engines/bodypose/index.html"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							<h1 className="font-bold text-3xl">Body Pose</h1>
							<span className="bg-blue-600 p-1 rounded px-10">Ir</span>
						</button>
					</div>
					<div className="flex flex-col justify-center">
						<a href="yolo">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								<h1 className="font-bold text-3xl">YOLO</h1>
								<span className="bg-blue-600 p-1 rounded px-10">Ir</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>

	)
}
