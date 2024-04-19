import { FadeLoader } from 'react-spinners'
function LoadingPage() {
  return (
      <div  style={{width:'99vw' , height:"102%" , backgroundColor: 'rgba(255,255,255,0.4)' }} className=' z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 d-flex justify-center items-center '>
    <FadeLoader  width={50} height={50} radius={20} color="#36d7b7" />
    <div className='pageLoading'>
    <div className="card mx-auto loadingSpinner ">
  <div className="card-body text-center">
    <h1 className="card-title">loading......</h1>
    <div className="spinner-border mt-3 w-75 h-75" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>  </div>
</div>
</div>  
      </div>
)
}

export default LoadingPage

