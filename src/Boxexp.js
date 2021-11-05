import React from "react";
import "./boxexp.css";

function Boxexp({ ima }) {
  return (
    <div className="boxer">
      <div className="projimg">
        <img src={ima} alt="" />{" "}
      </div>

      <div className="hov">
        <p className="descp">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <button className="view">view</button>
      </div>
    </div>
  );
}

export default Boxexp;
