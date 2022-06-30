import { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();
  const paraRef2 = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);

    console.log(paraRef.current.innerText);

    console.log(paraRef2.current.innerText);

    // inputRef.current.style.backgroundColor = `${inputRef.current.value}`;

    // paraRef.current.innerText = inputRef.current.value;

    // inputRef.current.value = "";
  };

  return (
    <>
      <form className="form1" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          className="input1"
          ref={inputRef}
        />
        <button type="submit" className="btn1">
          Click
        </button>
        <h2 ref={paraRef}>Assalomu alaykum</h2>
      </form>

      <h2 ref={paraRef2}>Not form</h2>
    </>
  );
};

export default UseRefExample1;
