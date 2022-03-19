import ClickCounter from './component/renderProps/ClickCounter';
import Counter from './component/renderProps/Counter';
import HoverCounter from './component/renderProps/HoverCounter';

function App() {
  return (
    <div>
      {/* <ClockList quantities={[1, 2, 3==]} /> */}
      {/* <Form /> */}
      {/* <Calculator /> */}
      {/* <ClickCounter /> */}
      <Counter render={
        (count, incrementCount) => (<ClickCounter count={count} incrementCount={incrementCount} />)
      }
      />
      <Counter render={
        (count, incrementCount) => (<HoverCounter count={count} incrementCount={incrementCount} />)
      }
      />
    </div>
  );
}

export default App;
