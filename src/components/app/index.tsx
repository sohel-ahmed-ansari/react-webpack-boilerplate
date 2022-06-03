import React from 'react';

import imgIcon from './icon/flask.svg';
import './style.less';

const App = () => {
  const message: string = 'Your boilerplate is ready!'; 
  return (
    <div className="app">
      <img src={imgIcon}></img>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
