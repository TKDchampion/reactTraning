import React, { useState } from "react";
import useNumberHook from "../CustomerHook";
// import { useEffect, useState } from "react";

// let setTimeoutFtn;
const ProgressBar = () => {
  // const [percentage, setPercentage] = useState(50);
  // const [value, setValue] = useState(10);

  // useEffect(() => {
  //   if (percentage < value) {
  //     setTimeoutFtn = setTimeout(() => {
  //       setPercentage((value) => value + 1);
  //     }, 100);
  //   } else if (percentage > value) {
  //     setTimeoutFtn = setTimeout(() => {
  //       setPercentage((value) => value - 1);
  //     }, 100);
  //   }

  //   return () => {
  //     clearTimeout(setTimeoutFtn);
  //   };
  // }, [value, percentage]);

  const [percent, setTarget, colorReducer] = useNumberHook(50);

  return (
    <div>
      <div style={{ width: 500, height: 50, ...colorReducer }}>
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            background: "#222",
          }}
        ></div>
      </div>
      <button onClick={() => setTarget(90)}>90</button>
      <button onClick={() => setTarget(10)}>10</button>
    </div>
  );
};
export default ProgressBar;
