import useLocalStorage from "../Hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // input change bo'lganda valueni storagega saqalaydi .
  // form submit bo'lganda valuelarni storagega array ichida obect qilib saqlaydi
  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().getTime(), // key yoki id uchun
    };

    // tasks ni spred operatori (...) orqali yoydik bu bizga localStorage dagi malumotlarni
    // ustma-ust (overwrite) qlib tozmasdan hammsini alohida yozish uchun hizmat qiladi.
    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
};

export default CustomHookExample2;
