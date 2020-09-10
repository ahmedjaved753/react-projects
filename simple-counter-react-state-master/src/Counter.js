import React, { useState, useEffect } from 'react';
// import useLocalStorage from './useLocalStorage';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(state => state + 1);

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count, 'pyara count');
    }, 3000);
    return () => {
      console.log('chala re');
      clearInterval(id);
    };
  }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default Counter;
