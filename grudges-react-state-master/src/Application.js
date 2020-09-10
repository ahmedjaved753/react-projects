import React from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  console.log('Rendering Application');

  return (
    <div className="Application">
      <NewGrudge />
      <Grudges />
    </div>
  );
};

export default Application;
