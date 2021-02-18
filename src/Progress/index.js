import { useEffect, useState } from "react";

let interval;
const Progress = (props) => {
  const [percentage, setPercentage] = useState(props.value);

  useEffect(() => {
    if (percentage < props.value) {
      interval = setInterval(() => {
        setPercentage((value) => value + 1);
      }, 100);
    } else if (percentage > props.value) {
      interval = setInterval(() => {
        setPercentage((value) => value - 1);
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [props.value, percentage]);
  // 如果useEffect裡面有用的的參數就一定要加

  return (
    <div>
      <div>{percentage}</div>
      <button onClick={() => props.click(90)}>90</button>
      <button onClick={() => props.click(10)}>10</button>
    </div>
  );
};

export default Progress;
