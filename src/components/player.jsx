import React from 'react';
import './player.css';

const Player = ({ currentSong }) => {
  if (!currentSong) return null;

  return (
    <div className="player">
      <div className="now-playing">
        <img src={currentSong.album.cover_medium} alt={currentSong.title} />
        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist.name}</p>
        </div>
      </div>
      <div className="controls">
        <img src="/assets/prev.png" alt="Previous" />
        <img src="/assets/play.png" alt="Play" />
        <img src="/assets/next.png" alt="Next" />
        <img src="/assets/repeat.png" alt="Repeat" />
        <img src="/assets/shuffle.png" alt="Shuffle" />
      </div>
    </div>
  );
};

export default Player;
