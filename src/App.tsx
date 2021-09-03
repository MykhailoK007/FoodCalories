import React from 'react';
import { Provider } from 'react-redux';
import { RootRouter } from './router/RootRouter';
import './App.scss';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
