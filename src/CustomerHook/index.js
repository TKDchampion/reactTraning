import { useState, useEffect, useRef, useReducer } from "react";

const colorReducerFtn = (_state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREASE":
      return { border: "green 2px solid", background: "blue" };
    case "DECREASE":
      return { border: "black 2px solid", background: "grey" };
    case "STOP":
      return { border: "orange 2px solid", background: "yellow" };
  }
};

const useNumberHook = (initVaule) => {
  const [target, setTarget] = useState(initVaule);
  const [percent, setPercent] = useState(0);
  // const [style, setStyle] = useState({
  //   background: "#ddd",
  //   border: "#ddd 1px solid",
  // });

  const timer = useRef();
  const [colorReducer, setColorReducer] = useReducer(colorReducerFtn);
  useEffect(() => {
    if (percent > target) {
      timer.current = setTimeout(() => setPercent(percent - 1), 30);
      setColorReducer({ type: "INCREASE" });
      // setStyle({ border: "green 2px solid", background: "blue" });
    } else if (percent < target) {
      timer.current = setTimeout(() => setPercent(percent + 1), 30);
      setColorReducer({ type: "DECREASE" });
      // setStyle({ border: "black 2px solid", background: "grey" });
    } else {
      setColorReducer({ type: "STOP" });
      // setStyle({ border: "orange 2px solid", background: "yellow" });
    }

    return () => {
      clearTimeout(timer.current);
    };
  }, [target, percent]);

  return [percent, setTarget, colorReducer];
};

export default useNumberHook;
