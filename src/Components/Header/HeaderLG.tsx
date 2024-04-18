import { NavLink } from 'react-router-dom'

function HeaderLG({headerFixed}:{headerFixed:boolean}) {
  return (
<div className='d-none d-lg-block'>
      <div className="mx-auto w-100 ">
            <nav className="container py-4 d-flex justify-content-around gap-3 flex-wrap align-items-center">        
      <NavLink className={"link fs-2"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Quran"}>
          Al Quran
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Reciters"}>
          ALL Reciters
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Questions"}>
          Questions
        </NavLink>
        <a className={"link fs-2"} href={"https://alquran.cloud/api"}>
          API ( Developer )
        </a>
      </nav>
      </div>
    <div
      className={
        `bg-secondary position-fixed   w-100 z-index ` +
        (headerFixed ? " top-0" : "top--")
      }
      >
      <nav className="d-flex container justify-content-around gap-2 flex-wrap align-items-center py-2">
        <NavLink className={"link fs-2"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Quran"}>
          Al Quran
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Reciters"}>
          ALL Reciters
        </NavLink>
        <NavLink className={"link fs-2"} to={"/Questions"}>
          Questions
        </NavLink>
        <a className={"link fs-2"} href={"https://alquran.cloud/api"}>
          API ( Developer )
        </a>
      </nav>
    </div>
      </div>  )
}

export default HeaderLG