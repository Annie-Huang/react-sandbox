import React, { useCallback, useState } from 'react';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  // Notice after adding useCallback, the <Button> component stop re-rendering
  // Memorize the function (addTask) so if the dependent list never change (e.g. setTasks), then the function never change, which prevents the component uses this function to change.
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

/*const Button = ({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};*/

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
