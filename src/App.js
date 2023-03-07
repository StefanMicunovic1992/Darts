import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePlayer from "./components/create-player/CreatePlayer.jsx";
import Game from "./components/game/Game.jsx";
import Page404 from "./components/page-404/Page404";


function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<CreatePlayer/>}></Route>
          <Route path={"/game"} element={<Game/>}></Route>
          <Route path={"/*"} element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;