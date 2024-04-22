import { useEffect, useState } from "react";
import PaginatedItems from "./Pagiate";
import { Reciter } from "../Types/app";
import reciters from "../data/reciters.json";





function AlReciters() {
  const [Select,setSelect] = useState<string>('')
  const [search,setSearch] = useState<string>('')
  const [AllData,setAllData] = useState<Reciter[]>(reciters )
  const [ShowData, setShowData]=useState<Reciter[]>(reciters )  
  //search of data
  useEffect(()=>{
    if(Select == ''){
      setShowData(AllData.filter(e => e.name.includes(search)))
    }else{
      setShowData(AllData.filter(e => e.name.includes(search) && e.rewaya == Select))
    }
    },[search , Select])

    // fetch data
  useEffect(()=>{
    fetch('src/Json/reciters.json').then(e=> e.json()).then(e=> {setAllData(e),setShowData(e)})
    },[])
  return (
    <div className="text-center  py-4  ">
      <h2 className=" fs-1">جميع القراء</h2>
      <div className="col-11 mx-auto">
        <div className="input-group  mb-3">
          <input
          onChange={(e)=>setSearch(e.currentTarget.value)}
            type="text"
            className="col-12 p-1 rounded  text-end d-block d-md-none mt-3"
            placeholder=" ... بحث عن قارئ " aria-label="Recipient's username" aria-describedby="button-addon2" 
          />
          <input
          onChange={(e)=>setSearch(e.currentTarget.value)}
            type="text"
            className="form-control  text-end d-none d-md-block"
          />
          <select  className="fs-4 text-end col-12 col-md-3 mt-3 mt-md-0" onChange={(e)=> setSelect(e.currentTarget.value)}  >
            <option value="" selected> ترتيب : قراءة</option>
            <option value="حفص عن عاصم">حفص عن عاصم</option>
            <option value="ورش عن نافع">ورش عن نافع</option>
            <option value="قالون عن نافع">قالون عن نافع</option>
            <option value="قالون عن نافع من طريق أبي نشيط">قالون عن نافع من طريق أبي نشيط</option>
            <option value="الدوري عن أبي عمرو">الدوري عن أبي عمرو</option>
            <option value="الدوري عن الكسائي">الدوري عن الكسائي</option>
            <option value="البزي وقنبل عن ابن كثير">البزي وقنبل عن ابن كثير</option>
            <option value="ابن ذكوان عن ابن عامر">ابن ذكوان عن ابن عامر</option>
            <option value="يعقوب الحضرمي بروايتي رويس وروح">يعقوب الحضرمي بروايتي رويس وروح</option>
            
          </select>
        </div>
      </div>
    <PaginatedItems data={ShowData} itemsPerPage={9}  />


    </div>
  );
}

export default AlReciters;
