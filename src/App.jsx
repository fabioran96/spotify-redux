import React, {useState} from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Player from './components/player';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar onSearch={handleSearch} />
        <Main searchQuery={searchQuery} setCurrentSong={setCurrentSong} />
        <Player />
      </div>
    </Provider>
  );
}

export default App;
