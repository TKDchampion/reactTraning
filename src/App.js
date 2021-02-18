// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Count from "./Count";
import Progress from "./Progress";
import ProgressBar from "./ProgressBar";
import ProgressNumber from "./Number";

function App() {
  const [progress, setProgress] = useState(3);
  const [count, showCount] = useState(false);

  const [percentage, setPercentage] = useState(0);

  return (
    <div className="App">
      <input value={progress} onChange={(e) => setProgress(e.target.value)} />
      <div>{progress}</div>
      <button onClick={() => showCount((count) => !count)}>click</button>
      {count && <Count></Count>}
      {/* 這邊的&&表示前面為true才繼續執行 */}
      <div>----------------------</div>
      <Progress
        value={percentage}
        click={(value) => setPercentage(() => value)}
      ></Progress>
      <div>----------------------</div>
      <ProgressBar></ProgressBar>
      <div>----------------------</div>
      <ProgressNumber />
    </div>
  );
}

export default App;
