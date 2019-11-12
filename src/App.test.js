import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TO from './TO';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<TO />, div);
  ReactDOM.unmountComponentAtNode(div);
});
