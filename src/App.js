import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';

function App() {
  return (
    <div className='container mt-5'>
      <UseRefExample1 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseRefExample2 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseRefExample3 />
    </div>
  );
}

export default App;
