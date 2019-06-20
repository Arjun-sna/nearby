import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/modules/app';

const Index = () => (
  <main>
    <App />
  </main>
);

ReactDOM.render(<Index />, document.getElementById('index'));
