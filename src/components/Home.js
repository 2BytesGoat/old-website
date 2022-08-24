import React from "react";
import { Link } from "react-router-dom";
import RetroWave from "./NewWave/RetroWave";

const home = () => (
  <div>
    <RetroWave />
    {/* <div className="jumbotron mt-5">
      <h1 className="display-4">Welcome to 2BytesGoat</h1>
      <p className="lead">
        We make all kinds of awesome blog about various topics.
      </p>
      <hr className="my-4" />
      <p>Click the button below to check out our awesome blog.</p>
      <Link className="btn btn-primary btn-lg" to="/blog" role="button">
        Check out our Blog
      </Link>
    </div> */}
  </div>
);

export default home;
