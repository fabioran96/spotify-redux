import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Player from './components/player';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="App">
      <Sidebar />
      <Main setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
