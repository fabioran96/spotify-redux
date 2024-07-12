import React from 'react';
import './player.css';
import { useSelector } from 'react-redux';
import playIcon from '../assets/play.png';
import nextIcon from '../assets/next.png';
import prevIcon from '../assets/prev.png';
import repeatIcon from '../assets/repeat.png';
import shuffleIcon from '../assets/shuffle.png';

const Player = () => {
  const currentSong = useSelector(state => state.song);

  return (
    <div className="player">
      {currentSong && (
        <div className="now-playing">
          <img src={currentSong.album.cover_medium} alt="Album Cover" />
          <div>
            <h4>{currentSong.title}</h4>
            <p>{currentSong.artist.name}</p>
          </div>
        </div>
      )}
      <div className="controls">
        <img src={prevIcon} alt="Previous" />
        <img src={playIcon} alt="Play" />
        <img src={nextIcon} alt="Next" />
        <img src={repeatIcon} alt="Repeat" />
        <img src={shuffleIcon} alt="Shuffle" />
      </div>
    </div>
  );
};

export default Player;

