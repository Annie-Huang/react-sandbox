import { useRef } from 'react';

const UseRefExample1 = () => {
  const inputRef = useRef();

  // useRef can be use in anything, not just input
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(inputRef);
    // When you change the ref value, it is not a state change so it will not rerender the component.
    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'red';

    paraRef.current.innerText = 'Goodbye';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
