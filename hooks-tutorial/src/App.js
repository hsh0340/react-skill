import './App.css';
import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(!visible)}
        }
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <Counter />
      {visible && <Info />}
    </div>
  );
}

export default App;
