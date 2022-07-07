import useLocalStorage from "../Hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...task, taskObj]);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="text">Task</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default CustomHookExample2;
