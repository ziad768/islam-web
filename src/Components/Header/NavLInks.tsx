import { useEffect, useState } from "react";
import HeaderSm from "./HeaderSm";
import HeaderLG from "./HeaderLG";
export default function NavLInks() {
  const [headerFixed, setheaderfixed] = useState(Boolean);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 50 ? setheaderfixed(true) : setheaderfixed(false);
    });
  }, [scrollY]);
  return (
    <>
    <HeaderSm/>
    <HeaderLG headerFixed= {headerFixed} />
    </>
  );
}
