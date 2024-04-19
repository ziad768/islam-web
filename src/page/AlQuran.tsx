import { useEffect, useState } from "react";
import CircleCard from "../Components/Quran/CircleCard";
import { surah } from "../Types/app";

function AlQuran() {
  const [Surahes, setSurahes] = useState<surah[]>();
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((e) => setSurahes(e.data));
  }, [Surahes]);
  return (
    <div className="container py-5 ">
      <h1 className="text-center text fs-1 mb-3" style={{ padding: "25px 0" }}>
        القران الكريم
        <br />
        Al Quran
      </h1>
      <div className="d-flex flex-wrap">
        {Surahes?.map((surah) => (
          <CircleCard surah={surah} />
        ))}
      </div>
    </div>
  );
}

export default AlQuran;
