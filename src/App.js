import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, incrementByAmount } from './redux/counter';

const App = () => {
  const count = useSelector(({ counter }) => counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>The count is:{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default App;
