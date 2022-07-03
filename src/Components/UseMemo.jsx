import { useState, useEffect, useRef, useMemo } from "react";
import { render } from "react-dom";

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onClick}>OnClick</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

export default UseMemo;
