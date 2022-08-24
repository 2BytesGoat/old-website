import React from "react";
import Navbar from "../components/Navbar/Navbar";

const layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default layout;
