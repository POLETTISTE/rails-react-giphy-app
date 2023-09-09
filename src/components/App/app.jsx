import React from "react";
import "./app.scss";

import SearchBar from "../SearchBar/search-bar";
import Gif from "../Gif/gif";
import GifList from "../GifList/giflist";

const App = (props) => {
  const gifs = [
    {
      id: "https://media0.giphy.com/media/fAv2n4Tlhshig/giphy.gif?cid=ecf05e47j5u5ocq44w3v22dhv1bj7xlmlcub901dqlu9vsu5&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
    },
    {
      id: "https://media3.giphy.com/media/WqdJYh9TQhjCfmPIAl/giphy.gif?cid=ecf05e47rlbesqocg7sxff5u80n8r6qsk36xkxy8uzwdy1j5&ep=v1_gifs_gifId&rid=giphy.gif&ct=g",
    },
  ];
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="https://media0.giphy.com/media/fAv2n4Tlhshig/giphy.gif?cid=ecf05e47j5u5ocq44w3v22dhv1bj7xlmlcub901dqlu9vsu5&ep=v1_gifs_gifId&rid=giphy.gif&ct=g" />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} />
      </div>
    </div>
  );
};

export default App;
