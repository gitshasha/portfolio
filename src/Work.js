import React from "react";
import Boxexp from "./Boxexp";
import ima from "./ima.png";
import "./work.css";
function Work() {
  var a = [1, 1, 1, 1, 1, 1];
  return (
    <div>
      <div className="group">
        {a.map((b) => (
          <Boxexp ima={ima} />
        ))}
      </div>
    </div>
  );
}

export default Work;
