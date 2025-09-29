"use client"

import {useRouter} from "next/navigation"

export default function Sidebar(props){
	const p = props
	const router = useRouter();
	return(
	<>
			<div style={{height:"100vh",opacity:0.8}} className="px-10 py-10 bg-red-800 flex flex-col items-top">
				<div style={{filter:"drop-shadow(0px 0px 5px white)"}} className="font-bold text-white text-6xl">Visionarium</div>
				<hr style={{filter:"drop-shadow(0px 0px 5px white)"}}></hr>
				<div>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded" onClick={()=>{router.back()}}>Voltar</button>
				</div>
			</div>
			<div style={{height:"100vh"}} className="px-1 py-10 bg-red-900 flex flex-col items-top">
				<div className="w-10"></div>
			</div>
			<div style={{height:"100vh"}} className="px-1 py-10 bg-red-950 flex flex-col items-top">
				<div className="w-5"></div>
			</div>
	</>
	)
}

