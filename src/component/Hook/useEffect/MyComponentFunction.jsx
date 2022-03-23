import React, { useEffect, useState } from 'react';

export default function MyComponentFunction() {
  const [clock, setClock] = useState(new Date());
  const [count, setCount] = useState(0);

  const addClick = () => {
    setCount((prev) => prev + 1);
  };

  const tick = () => {
    setClock(new Date());
  };

  useEffect(() => {
    console.log('updating document title');
    document.title = `Clicked ${count} time`;
  }, [count]);

  useEffect(() => {
    setInterval(tick, 1000);
  });

  return (
    <div>
      <h1>
        Time:
        {' '}
        {clock.toLocaleTimeString('bn-BD')}
      </h1>

      <button type="button" onClick={addClick}>
        Click
      </button>
    </div>
  );
}
