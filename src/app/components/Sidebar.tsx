"use client"

import {useRouter} from "next/navigation"
import {useState, useEffect} from "react"
import {MoveLeft} from "lucide-react"

export default function Sidebar() {
	const router = useRouter();
  let [collapsed, setCollapsed] = useState(true);
  const railWidth = collapsed ? "w-30" : "w-128";
  const contentWidth = collapsed ? "w-0" : "w-full";
  const hiddenIfCollapsed = collapsed ? "hidden" : "";
  const buttonIfCollapsed = collapsed ? "w-10 h-10" : "w-full h-full";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  },[])

	return(
	<>
    <div className={`py-10 ${railWidth} bg-red-800 ...`}>
			<div className="h-screen px-10">
        <div style={{filter:"drop-shadow(0px 0px 5px white)"}} className={`font-bold text-white px-5 ${hiddenIfCollapsed} text-6xl`}>Visionarium</div>
				<hr style={{filter:"drop-shadow(0px 0px 5px white)"}}></hr>
				<div className={`${buttonIfCollapsed}`}>
					<button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 ${collapsed?"px-2":"px-4"} rounded `} onClick={()=>{router.back()}}>{collapsed?"":"Voltar"}<MoveLeft /></button>
				</div>
			</div>
    </div>
	</>
	)
}

