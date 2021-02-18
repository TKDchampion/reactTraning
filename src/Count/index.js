import { useEffect, useState } from "react";

const Count = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  let interval;
  // 當你在重新render的時候都會執行，可以指定當哪些直變化才執行
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      console.log(123);
      clearInterval(interval);
    };
  }, []);
  // [] 沒指定只會跑一次，並且會onDestory

  return (
    <div>
      <button onClick={() => setValue((value) => value + 1)}>{value}</button>
      <button onClick={() => setValue1((value1) => value1 + 1)}>123</button>
    </div>
  );
};

export default Count;
