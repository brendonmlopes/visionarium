"use client"

import {useRouter} from "next/navigation"
import {useState, useEffect} from "react"
import {MoveLeft} from "lucide-react"
import {LogIn} from "lucide-react"
import {House} from "lucide-react"

export default function Sidebar() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const railWidth = collapsed ? "w-30" : "w-128";
  const hiddenIfCollapsed = collapsed ? "hidden" : "";
  const buttonIfCollapsed = collapsed ? "w-10 h-10" : "w-full h-full";

	const glow = (e:React.ChangeEvent<HTMLInputElement>)=>{
		e.target.style.boxShadow = "0 0 10px 5px #FFFFFF";
	}
	const unglow = (e:React.ChangeEvent<HTMLInputElement>)=>{
		e.target.style.boxShadow = "none";
	}

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
	<div className={`py-10 ${railWidth} h-screen bg-red-800`}>
		<div className="px-10">
			<div style={{filter:"drop-shadow(0px 0px 5px white)"}} className={`font-bold text-white px-5 ${hiddenIfCollapsed} text-6xl`}>
				Visionarium
			</div>

			<hr/>

			<div className="flex flex-col">
				<div className={`${buttonIfCollapsed}`}>
					<button onMouseOver={(e)=>glow(e)} onMouseOut={(e)=>{unglow(e)}} className={`dark-bg hover:bg-blue-700 text-white font-bold mt-5 py-2 ${collapsed?"px-2":"px-4"} rounded-full `} onClick={()=>{router.push("/")}}>
						<House className="rounded-full"/>
					</button>
				</div>
				<div className={`${buttonIfCollapsed}`}>
					<button onMouseOver={(e)=>glow(e)} onMouseOut={(e)=>{unglow(e)}} className={`dark-bg hover:bg-blue-700 text-white font-bold mt-1 py-2 ${collapsed?"px-2":"px-4"} rounded-full `} onClick={()=>{router.push("/auth")}}>
						<LogIn className="rounded-full"/>
					</button>
				</div>
				<div className={`${buttonIfCollapsed}`}>
					<button onMouseOver={(e)=>glow(e)} onMouseOut={(e)=>{unglow(e)}} className={`dark-bg hover:bg-blue-700 text-white font-bold mt-1 py-2 ${collapsed?"px-2":"px-4"} rounded-full `} onClick={()=>{router.back()}}>
						<MoveLeft className="rounded-full"/>
					</button>
				</div>
			</div>
		</div>
	</div>
	</>
	)
}

