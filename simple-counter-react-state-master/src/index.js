import React, { useState } from 'react';
import { render } from 'react-dom';

import Counter from './Counter';

import './styles.scss';
import ClassCounter from './ClassCounter';

const Application = () => {
  const [show, setShow] = useState(true);

  return (
    <main className="Application">
      <button onClick={() => setShow(!show)}>Toggle</button>

      <section className="Counters">
        {show && <Counter />}
        {/* <ClassCounter /> */}
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
