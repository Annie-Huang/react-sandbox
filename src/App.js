import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomHookExample1 from './components/CustomHookExample1';
import CustomHookExample2 from './components/CustomHookExample2';

function App() {
  return (
    <div className='container mt-5'>
      <UseRefExample1 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseRefExample2 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseRefExample3 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseMemoExample />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <UseCallbackExample />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <CustomHookExample2 />
      <hr style={{ margin: '40px 0', color: 'red' }} />
      <CustomHookExample1 />
    </div>
  );
}

export default App;
