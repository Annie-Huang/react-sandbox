import React from 'react';
import useFetch from '../hooks/useFetch';

const CustomHookExample1 = () => {
  // const res = useFetch('https://jsonplaceholder.typicode.com/posts', {});
  // console.log(res);

  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookExample1;
