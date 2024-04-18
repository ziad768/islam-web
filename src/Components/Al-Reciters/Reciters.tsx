import { PropsReciters } from "../../Types/app";
import CardReciter from "./CardReciter";



export default function Reciters({reciters}:PropsReciters) {
     
  return (
    <div className=" ">
    <div className="d-flex justify-content-around container gap-3 flex-wrap">
    {reciters.map((e)=> 
    <CardReciter  key={e.id} reciter={e} />)}
    </div></div>
      )
}
