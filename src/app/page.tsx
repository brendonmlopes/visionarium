"use client"
import Sidebar from "!/Sidebar"
import {useState} from "react"

export default function Home() {
	return (
		<div className="flex">
			<Sidebar />

			<div className="dark-bg min-h-screen w-screen flex flex-col justify-center items-center pb-50">
				<div className="mb-20">
					<h1 className="font-bold text-center text-5xl mt-50">Modelos disponíveis</h1>
				</div>
				<hr className="w-1/2 mb-20"/> 
				<div className="flex flex-wrap justify-center">
					<div className="flex flex-col justify-center mx-1 my-2">
						<button onClick={()=>{window.location.href="/engines/bodypose/index.html"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							<h1 className="font-bold text-3xl">Body Pose</h1>
							<span className="bg-blue-600 p-1 rounded px-10">Ir</span>
						</button>
					</div>
					<div className="flex flex-col justify-center mx-1">
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
