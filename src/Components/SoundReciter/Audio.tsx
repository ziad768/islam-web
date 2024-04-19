import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { PropsReciter, surah } from "../../Types/app";
import { useEffect, useState } from "react";

const Audio = ({ linkSurahs, numberSurah }: PropsReciter) => {
  const [Surah, setSurah] = useState<surah>({} as surah);
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${numberSurah}`)
      .then((res) => res.json())
      .then((data) => setSurah(data.data));
  }, [numberSurah]);
  return (
    <AudioPlayer
      className="fixed bottom-0 left-0"
      header={
        <div className="d-flex justify-between fs-2">
          <div>{Surah.englishName}</div>
          <div>{Surah.name}</div>{" "}
        </div>
      }
      src={
        linkSurahs +
        (numberSurah < 10
          ? `/00${numberSurah}.mp3`
          : numberSurah < 100
          ? `/0${numberSurah}.mp3`
          : `/${numberSurah}.mp3`)
      }
      volume={0.3}
    />
  );
};
export default Audio;
