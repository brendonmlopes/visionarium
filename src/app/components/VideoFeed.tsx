export default function VideoFeed(){
  return(
    <div className="flex flex-col justify-center items-center mb-5">
      <video className="border-4 border-blue-500 rounded-lg" width="800" height="600" autoPlay muted></video>
    </div>
  )
}
