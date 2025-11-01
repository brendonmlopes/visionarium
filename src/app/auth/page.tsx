"use client";

export default function LoginPage() {
	const glow = (e:React.ChangeEvent<HTMLInputElement>)=>{
		e.target.style.boxShadow = "0 0 10px 5px #FF0000";
		for(let i=0;i<100;i++){
			setTimeout(()=>{
				e.target.style.boxShadow = `0 0 ${10-i}px ${2-i*0.2}px #FF0000`;
			},i*50);
		}
	}

	return(
		<div className="flex flex-col h-screen justify-center items-center dark-bg">
			<h1 className="text-white text-4xl">Login</h1>
			<form method="POST" className="flex flex-col bg-gray-800 p-10 rounded-lg shadow-lg">
				<label className="text-white mb-2">Email:</label>
				<input type="text" onChange={(e)=>{glow(e)}} className="dark-bg mb-4 p-2 rounded"/>
				<label className="text-white mb-2">Senha:</label>
				<input type="password" onChange={(e)=>{glow(e)}} className="dark-bg mb-4 p-2 rounded"/>
				<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
			</form>
		</div>
	)
}
