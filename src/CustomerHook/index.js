import { useState, useEffect, useRef } from "react";

const useNumberHook = (initVaule) => {
  const [target, setTarget] = useState(initVaule);
  const [percent, setPercent] = useState(0);
  const timer = useRef();
  useEffect(() => {
    if (percent > target) {
      timer.current = setTimeout(() => setPercent(percent - 1), 30);
    } else if (percent < target) {
      timer.current = setTimeout(() => setPercent(percent + 1), 30);
    }
    return () => clearTimeout(timer.current);
  }, [target, percent]);

  return [percent, setTarget];
};

export default useNumberHook;
