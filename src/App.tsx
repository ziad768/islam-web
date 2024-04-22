import Home from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AlReciters from "./page/AlReciters";
import SoundReciter from "./page/SoundReciter";
import { NextUIProvider } from "@nextui-org/react";
import Questions from "./page/Questions";
import AlQuran from "./page/AlQuran";
import Surah from "./page/Surah";
import NotFound from './page/Error/NotFound.tsx';

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
            <Home />
            <Outlet/>
            </>
          } >
          <Route path="Reciters" element={<AlReciters />} />
          <Route path="Quran" element={<Outlet />}>
            <Route path="" element={<AlQuran />} />
            <Route path=":NumberSurah" element={<Surah />} />
          </Route>
          <Route path="Questions" element={<Questions />}/>
          <Route path="sound/:id" element={<SoundReciter />}/>
          <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;

