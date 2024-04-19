import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardReciterDetails from "../Components/SoundReciter/CardReciterDetails";
import Audio from "../Components/SoundReciter/Audio";
import CardsSurahs from "../Components/SoundReciter/CardsSurahs";

function SoundReciter() {
  const { id } = useParams();
  const [Reciter, setReciter] = useState(Object);
  const [numberSurah, setNumberSurah] = useState<number>(0);
  
  useEffect(() => {
    fetch("/src/Json/reciters.json")
      .then((e) => e.json())
      .then((e) => {
        setReciter(e.find((e: { id: string }) => e.id == id));
      });
  }, []);

  const handleClick = (numberSurah: number) => {
    setNumberSurah(numberSurah);
  };
  return (
    <div className="bg-light py-5  ">
      <CardReciterDetails Reciter={Reciter} />
      <CardsSurahs numberSurah={numberSurah}  handleClick={handleClick} />
      <Audio linkSurahs={Reciter.Server} numberSurah={numberSurah} />
    </div>
  );
}

export default SoundReciter;
