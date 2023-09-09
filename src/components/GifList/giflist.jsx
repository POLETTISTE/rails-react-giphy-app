import React from "react";
import Gif from "../Gif/gif";

const GifList = (props) => {
  return (
    <div>
      {props.gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} />;
      })}
    </div>
  );
};

export default GifList;
