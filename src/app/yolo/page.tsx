import Sidebar from "!/Sidebar"
import Image from "next/image"

export default function Yolo(){
	return(
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col w-full bg-black">
				<div className="flex h-full justify-center items-center mx-auto">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
						<label htmlFor="fileInput" className="flex px-5 py-2">Upload do Vídeo <Image alt="upload" className="ms-3 invert" src="/file.svg" width="20" height="20"></Image></label>
					</button>
						<input id="fileInput" type="file" style={{display:"none"}}>
						</input>
				</div>

				<div className="h-5 bg-red-950"></div>

				<div className="flex h-50 justify-center items-center mx-auto">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Processar!</button>
				</div>
			</div>
		</div>
	)
}
