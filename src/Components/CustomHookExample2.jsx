import { useState } from "react";

const CustomHookExample2 = () => {
  const [task, setTask] = useState("");

  return (
    <form>
      <label htmlFor="text">Task</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default CustomHookExample2;
