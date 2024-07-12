import { useEffect, useState } from 'react';
import './main.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Main = ({ setCurrentSong, searchQuery }) => {
  const [songs, setSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  useEffect(() => {
    fetchSongs('pop', setPopSongs);
    fetchSongs('rock', setRockSongs);
    fetchSongs('hip hop', setHipHopSongs);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchSongs(searchQuery, setSongs);
    }
  }, [searchQuery]);

  const fetchSongs = async (query, setSongs) => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    const data = await response.json();
    setSongs(data.data); 
  };

  return (
    <Container fluid className="main-content">
      {searchQuery && (
        <>
          <h3>Results for "{searchQuery}"</h3>
          <Row className="music-section">
            {songs.map(song => (
              <Col key={song.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className="song-card" onClick={() => setCurrentSong(song)}>
                  <Card.Img variant="top" src={song.album.cover_medium} alt="Album Cover" />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
      
      {!searchQuery && (
        <>
          <h3>Pop</h3>
          <Row className="music-section">
            {popSongs.slice(0, 5).map(song => (
              <Col key={song.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className="song-card" onClick={() => setCurrentSong(song)}>
                  <Card.Img variant="top" src={song.album.cover_medium} alt="Album Cover" />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <h3>Rock</h3>
          <Row className="music-section">
            {rockSongs.slice(0, 5).map(song => (
              <Col key={song.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className="song-card" onClick={() => setCurrentSong(song)}>
                  <Card.Img variant="top" src={song.album.cover_medium} alt="Album Cover" />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <h3>Hip Hop</h3>
          <Row className="music-section">
            {hipHopSongs.slice(0, 5).map(song => (
              <Col key={song.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className="song-card" onClick={() => setCurrentSong(song)}>
                  <Card.Img variant="top" src={song.album.cover_medium} alt="Album Cover" />
                  <Card.Body>
                    <Card.Title>{song.title}</Card.Title>
                    <Card.Text>{song.artist.name}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Main;
