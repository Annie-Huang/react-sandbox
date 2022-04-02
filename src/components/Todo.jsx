import { useEffect, useRef, useState } from 'react';

/*const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  // If I click 'Toggle Todo' Button within 3 seconds, I will get this error:
  // index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //     at Todo (http://localhost:3000/static/js/main.chunk.js:688:87)
  //
  // However, react 18 seems to resolve this problem!?!
  // You can see this problem in react 17: C:\Temp\my-react17-app\src\components\Todo.tsx

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTodo(data);
          setLoading(false);
        }, 3000);
      });
  }, []);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
};*/

const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  // If I click 'Toggle Todo' Button within 3 seconds, I will get this error:
  // index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  //     at Todo (http://localhost:3000/static/js/main.chunk.js:688:87)
  //
  // However, react 18 seems to resolve this problem!?!
  // You can see this problem in react 17: C:\Temp\my-react17-app\src\components\Todo.tsx

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    // This runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
};

export default Todo;
