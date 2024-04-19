import { useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { surah } from "../../Types/app";
import Pause from "../../assets/icons8-pause-50.png";
import Play from "../../assets/icons8-play-50.png";
import { Link } from "react-router-dom";
export default function CardsSurahs({
  numberSurah,
  handleClick,
}: {
  numberSurah: number;
  handleClick: (numberSurah: number) => void;
}) {
  const [allSurahs, setAllSurahs] = useState<surah[]>([]);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((e) => e.json())
      .then((e) => setAllSurahs(e.data));
  }, []);
  return (
    <Card className="container mt-3">
      <CardBody>
        {allSurahs.map((surah) => (
          <div className="card  mb-3 " key={surah.number}>
            <Link to={`/Quran/${surah.number}`}>
            <div className="card-body ">
              <h5 className="card-title text-end"> {surah.name} </h5>
              <p className="card-text">Surah : {surah.englishName}</p>
            </div></Link>
            <div className="card-footer text-end ">
                {+numberSurah == +surah.number ? (
                  <>
                    Pause
                    <img
                      src={Pause}
                      height={30}
                      width={30}
                      className="inline-block"
                      alt="Pause"
                    />
                  </>
                ) : (
              <button onClick={() => handleClick(surah.number)}>
                  
                    play
                    <img
                      src={Play}
                      height={30}
                      width={30}
                      className="inline-block"
                      alt="Play"
                    />
              </button>
                  
                )}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
