import { useRef, useState, useEffect } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState();
  const renders = useRef(0);

  const pervName = useRef();
  const inputRef = useRef();

  useEffect(() => {
    renders.current = renders.current + 1;
    pervName.current = name;
  }, [name]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <>
      <form className="form1" onSubmit={onSubmit}>
        <label>Renders: {renders.current}</label>
        <label>PrevName: {pervName.current}</label>

        <input
          type="text"
          name="name"
          id="name"
          className="input1"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn1">
          Click
        </button>
      </form>
    </>
  );
};

export default UseRefExample2;
