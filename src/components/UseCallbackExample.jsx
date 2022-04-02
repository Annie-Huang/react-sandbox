import { useState } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  };

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

const Button = ({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};
export default UseCallbackExample;
