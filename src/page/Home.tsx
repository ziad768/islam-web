import Header from "../Components/Header/Header";
import ContentHome from "../Components/Home/ContentHome";
export default function Home() {
  return (
    <>
    <div className="imgHome">
      <Header/>
      <div className="home d-flex justify-content-center  align-items-center">
      <ContentHome/>
    </div>
    </div>
    </>
  )
}
