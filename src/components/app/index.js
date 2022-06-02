import React from 'react';

import imgIcon from './icon/flask.svg';
import './style.less';

const App = () => {
  return (
    <div className="app">
      <img src={imgIcon}></img>
      <h1>Your boilerplate is ready!</h1>
    </div>
  );
};

export default App;
