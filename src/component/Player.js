import { Card, Row, Col } from "react-bootstrap";

function Player(props) {
  return (
    <>
      {" "}
      <Card style={{ width: "18rem" }} className="mt-3">
        <img src={props.imageUrl} alt="Player" style={{height :'250px', width :'100%', objectFit:'cover'}} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.team}</Card.Text>
          <Card.Text>{props.nationality}</Card.Text>
          <Card.Text>{props.jerseyNumber}</Card.Text>
          <Card.Text>{props.age}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Player;
