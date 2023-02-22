import React from 'react';
import './App.css';
import {LandingPage} from "./components/LandingPage";
import {Link, Route, Routes} from "react-router-dom";
import {MusicPage} from "./components/MusicPage";
import {PhotoPage} from "./components/PhotoPage";
import {Navbar} from "./components/Navbar";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/music"} element={<MusicPage/>}/>
          <Route path={"/photography"} element={<PhotoPage/>}/>
        </Routes>
      </>

  );
}

export default App;
