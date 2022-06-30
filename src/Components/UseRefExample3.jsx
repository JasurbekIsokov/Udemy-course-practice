import { useState } from "react";

import Todo from "./Todo";

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button className="toogleTodo" onClick={() => setShowTodo(!showTodo)}>
        Toogle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
