import React from "react";
import "./style.css";
import "./NewWaveRetro.css";
import synth_background from "../../media/synthwave_background.jpg";

const RetroWave = () => {
  const newStyleText = "2BytesGoat's";
  const retroStyleText = "AI&GAMES";
  return (
    <div className="nwr-background">
      <div className="perspective-wrapper">
        <div className="landscape"></div>
      </div>
      <img
        src={synth_background}
        alt="synth_background"
        className="nwr-img"
      ></img>

      <div className="nrw">
        <span className="new">
          {newStyleText.split("").map((letter) => (
            <span className="letter">{letter}</span>
          ))}
        </span>
        <span className="retro">
          {retroStyleText.split("").map((letter) => (
            <span>{letter}</span>
          ))}
        </span>
      </div>
      <div className="triangle"></div>
    </div>
  );
};

export default RetroWave;
