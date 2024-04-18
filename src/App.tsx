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
import NotFound from './page/Error/NotFound.jsx';

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Outlet />} />
          <Route path="/Reciters" element={<AlReciters />} />
          <Route path="/Quran" element={<Outlet />}>
            <Route path="" element={<AlQuran />} />
            <Route path=":NumberSurah" element={<Surah />} />
          </Route>
          <Route path="/Questions" element={<Outlet />}>
            <Route path="" element={<Questions />} />
          </Route>
          <Route path="/sound" element={<Outlet />}>
            <Route path=":id" element={<SoundReciter />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
