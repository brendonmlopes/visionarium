export default function VideoFeed({source="https://w3schools/html/mov_bbb.mp4"}: {source:string}) {
	return(
		<div className="bg-black flex flex-col justify-center items-center mb-5">
			<video className="border-4 border-blue-500 rounded-lg" width="800" height="600" src={source} autoPlay muted style={{objectFit:"cover"}} controls>
			</video>
		</div>
	)
}
