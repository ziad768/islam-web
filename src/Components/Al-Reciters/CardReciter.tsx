import { useNavigate } from "react-router-dom"
import { Button, Card, Image } from "@nextui-org/react";
function CardReciter({reciter}: {reciter:{image: string,name: string,rewaya:string, id:number}}) {
  const Navigate = useNavigate()
  return (
    <>
<Card isFooterBlurred className="col-span-12 sm:col-span-7 col-12 col-lg-5 col-xl-3 " style={{height:500}}>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full opacity-100 h-full object-cover"
        src={reciter.image}
      />
      <div className="absolute w-100 p-3 bg-white bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 justify-between  items-center">
        <Button radius="full" onClick={() => Navigate(`/sound/${reciter.id}`)} className="fs-3" >استماع</Button>
          <div className="flex flex-col ">
            <h2 className="fs-4 text-dark ">القارئ <span className="fw-bold">{reciter.name}</span></h2>
            <h2 className="fs-4 text-dark "> قراءة <span className="fw-bold">{reciter.rewaya}</span> </h2>
          </div>
        </div>
      </div>
    </Card>
    </>
  )
}

export default CardReciter