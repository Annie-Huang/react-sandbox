import { useEffect, useRef, useState } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // Create the expensive function
  // const sqrt = getSqrt(number);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>{/*The sqrt of {number} is {sqrt}*/}</h2>

      <button onClick={onClick} className='btn btn-primary'>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

export default UseMemoExample;
