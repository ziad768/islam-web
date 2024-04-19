import { Link } from "react-router-dom";
import { surah } from "../../Types/app";
import circleSurah from "../../assets/surah-number-circle.png";
type Props = {
  surah: surah;
};
function CircleCard({ surah }: Props) {
  return (
    <div className="d-flex justify-center align-items-center col-6 col-md-3 ">
      <Link to={`/Quran/${surah.number}`}>
        <div className=" text-center">
          <span className="relative ">
            <img src={circleSurah} className="m-auto" alt=""></img>
            <h2 className="absolute top-1/2 left-0  fs-2 -translate-x-1/2 -translate-y-1/2 z-20">
              {surah.number}{" "}
            </h2>
          </span>
          <div className="my-3">
            <h2 className="fs-3">{surah.name}</h2>
            <h2 className="fs-3">{surah.englishName}</h2>
            <h3>Ayahs : {surah.numberOfAyahs}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CircleCard;
