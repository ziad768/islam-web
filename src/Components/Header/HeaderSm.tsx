import { NavLink } from "react-router-dom"

function HeaderSm() {
  return (

    <div className="d-block d-lg-none">
              <nav className="d-flex p-4 justify-content-between gap-3 flex-wrap align-items-center ">
        <NavLink className={"link"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"link"} to={"/Quran"}>
          Al Quran
        </NavLink>
        <NavLink className={"link"} to={"/Reciters"}>
          ALL Reciters
        </NavLink>
        <NavLink className={"link"} to={"/Questions"}>
          Questions
        </NavLink>
        <a className={"link"} href={"/https://alquran.cloud/api"}>
          API ( Developer )
        </a>
      </nav>
    </div>
  )
}

export default HeaderSm