import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import './styles/main.scss';

const App = _ => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          sdflsjdlfsjdfl
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
