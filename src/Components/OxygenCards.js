import React from "react";
import { Button, Card } from "react-bootstrap";

const OxygenCards = ({ id, city }) => {
  return (
    <Card className="my-3 p-3 card_design">
      <Card.Body>
        <Card.Title as="div">
          <center>
            <strong>
              <h3>Oxygen Cards</h3>
            </strong>
          </center>
          <hr></hr>
        </Card.Title>
        <Card.Text as="div">ID: {id}</Card.Text>
        <Card.Text as="h4">City: {city}</Card.Text>
        <Card.Text>Beds available: 100</Card.Text>
        <Card.Text>Beds available:</Card.Text>

        <hr></hr>
      </Card.Body>
    </Card>
  );
};

export default OxygenCards;