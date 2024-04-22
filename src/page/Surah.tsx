import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { surah } from "../Types/app";
import LoadingPage from "../Components/LoadingPage";
import Audio from "../Components/SoundReciter/Audio";
import NotFound from './Error/NotFound.tsx';

function Surah() {
  const { NumberSurah = 1 } = useParams();
  const [Surah, setSurah] = useState<surah>({} as surah);
  const [Loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${NumberSurah}/ar.alafasy`)
    .then((res) => res.json())
      .then((e) => {
        setSurah(e.data);
        setLoading(true);
      });
    }, [NumberSurah]);
    
  return (
    <>
    {}
      {!Number.isInteger(+NumberSurah)? <NotFound/> : Loading ? (
        <div className=" " style={{padding:'100px 0'}}>
          <div
            className="bg-cover  p-3 container fs-1 rounded  my-3 text-center col-11"
            style={{ border: "solid 3px #258" }}
          >
            {Surah.englishName}
            <br />
            {Surah.name}
          </div>
          <div className="bg-cover caverSurah p-3 container mb-5 text-end rounded py-5 my-5 col-11">
            {Surah?.ayahs?.map((ayah) => (
              <span
                key={ayah.numberInSurah}
                onMouseEnter={(e) => {
                  (e.currentTarget.children[1] as HTMLAudioElement).play();                  
                  (e.currentTarget.children[1] as HTMLAudioElement).currentTime = 0;                  
                }}
                onMouseLeave={(e)=>(e.currentTarget.children[1] as HTMLAudioElement).pause()}
                className="p-2 my-2 fs-1 cursor-pointer"
              >
                {ayah.text}
                <span
                  className="rounded-circle  border-2  p-1 fs-3 mx-1"
                  style={{ borderColor: "red" }}
                >
                  {ayah.numberInSurah}
                </span>
                <audio src={ayah.audio} className="d-none" loop />
              </span>
            ))}
          </div>
          <Audio
            linkSurahs={"http://server8.mp3quran.net/afs/"}
            numberSurah={+NumberSurah}
          />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default Surah;
