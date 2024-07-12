import React from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Player from './components/player';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Main />
        <Player />
      </div>
    </Provider>
  );
}

export default App;

