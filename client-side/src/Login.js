import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import "./style.css";

//spotify authorization url
const auth =
  "https://accounts.spotify.com/authorize?client_id=72a2e61febc24e8ba2c7a7842ca482c9&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
//Login component landing page and refresh url
export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      id="login-bckg"
      style={{ minHeight: "100vh" }}
    >
      <ListGroup id="instructions-wrapper">
        <ListGroup.Item id="instructions-item">
          1. Find 30 minutes of time.
        </ListGroup.Item>
        <ListGroup.Item id="instructions-item">
          2. Use your Spotify credentials.
        </ListGroup.Item>
        <ListGroup.Item id="instructions-item">
          3. Search for a song from Spotify.
          <br /> ALL of their vast array of tracks are available.
        </ListGroup.Item>
        <ListGroup.Item id="instructions-item">4. Click start.</ListGroup.Item>
        <ListGroup.Item id="instructions-item">
          5. Be purely productive, and focus!
        </ListGroup.Item>
        <a className="btn btn-success btn-xl" href={auth}>
          Spotify Login
        </a>
      </ListGroup>
    </Container>
  );
}
