import {  useState } from "react";
import CardQ from "../Components/Questions/CardQ";
import Filter from "../Components/Questions/Filter";

function Questions() {
  const [filter, setfilter] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="container py-5 ">
      <h1 className="text-center text fs-1 " style={{ padding: "25px 0" }}>
        الاختبارات
      </h1>
      <div className="d-flex justify-between flex-wrap ">
        <div
          className="col-lg-3
         col-12 "
        >
          <Filter selected={setfilter} searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div className="col-12 col-lg-8  d-flex justify-between flex-wrap gap-5">
          <CardQ filter={filter} searchText={searchText} />
        </div>
      </div>
    </div>
  );
}

export default Questions;
