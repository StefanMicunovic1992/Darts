import React, { useEffect } from "react";
import "./style/TableForResult.css";
import { useSelector } from "react-redux";
import OnePlayer from "../one-player/OnePlayer";

function TableForResult() {
  const gameState = useSelector((state) => state.game);

  useEffect(() => {
    console.log(gameState);
  }, [gameState]);
  return (
    <section id="tableForResult">
      <table>
        <tr>
          <th></th>
        </tr>
        <tr>
          <th>15</th>
        </tr>
        <tr>
          <td>16</td>
        </tr>
        <tr>
          <td>17</td>
        </tr>
        <tr>
          <td>18</td>
        </tr>
        <tr>
          <td>19</td>
        </tr>
        <tr>
          <td>20</td>
        </tr>
        <tr>
          <td>Bull</td>
        </tr>
      </table>
      {gameState.present.player?.map((player) => (
      <OnePlayer player={player} key={player.id}/>
      ))}
    </section>
  );
}

export default TableForResult;
