import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePlayer from "./components/CreatePlayer/CreatePlayer.jsx";
import Game from "./components/Game/Game.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<CreatePlayer></CreatePlayer>}></Route>
        <Route path={"/game"} element={<Game></Game>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
