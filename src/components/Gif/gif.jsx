import React from "react";
import "./gif.scss";

const Gif = (props) => {
  return <img src={props.id} alt="" className="gif" />;
};

export default Gif;
