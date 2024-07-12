import { useEffect, useState } from 'react';
import './main.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Main = ({ setCurrentSong }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen');
    const data = await response.json();
    setSongs(data.data);
  };

  return (
    <Container className="main-content">
      <Row className="music-section">
        {songs.map(song => (
          <Col key={song.id} md={4} lg={3} className="mb-4">
            <Card className="song-card">
              <Card.Img variant="top" src={song.album.cover_medium} alt="Album Cover" />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>Artist: {song.artist.name}</Card.Text>
                <Button variant="primary" onClick={() => setCurrentSong(song)}>Play</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
