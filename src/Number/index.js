// import React, { useState, useEffect, useRef } from "react";
import useNumberHook from "../CustomerHook";

const ProgressNumber = () => {
  const [percent, setTarget] = useNumberHook(10);
  //   const [target, setTarget] = useState(10);
  //   const [percent, setPercent] = useState(0);
  //   const timer = useRef();
  //   useEffect(() => {
  //     if (percent > target) {
  //       timer.current = setTimeout(() => setPercent(percent - 1), 30);
  //     } else if (percent < target) {
  //       timer.current = setTimeout(() => setPercent(percent + 1), 30);
  //     }
  //     return () => clearTimeout(timer.current);
  //   }, [target, percent]);
  return (
    <div>
      目前比率: {percent}%<button onClick={() => setTarget(90)}>90</button>
      <button onClick={() => setTarget(10)}>10</button>
    </div>
  );
};
export default ProgressNumber;
