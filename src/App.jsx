import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Player from './components/player';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <Sidebar onSearch={handleSearch} />
      <Main setCurrentSong={setCurrentSong} searchQuery={searchQuery} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;

