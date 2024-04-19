import img from "../../assets/logo.webp";
export default function ContentHome() {
  return (
    <>
    <div className=" text-center text-light container ">
      <img src={img} alt="" className="mx-auto" height={50} width={50} />
      <h1 className="my-4 ">ISLAM IS PEACE</h1>
      <h3>
        Welcome to the Islam website. There is a large number of reciters of the
        Quran.
      </h3>
    </div>
        </>
  )
}
