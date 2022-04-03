import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CustomHookExample2 = () => {
  // const [task, setTask] = useState('');

  // How to do it with single value.
  const [task, setTask] = useLocalStorage('task', '');

  // How to do it with array value.
  // Local storage will only be updated when submit button is hit.
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            className='form-control'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <div>{tasks.map((task) => JSON.stringify(task))}</div>
    </>
  );
};

export default CustomHookExample2;
