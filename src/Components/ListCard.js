import React from "react";
import { Button, Card } from "react-bootstrap";

const ListCard = ({ id, city }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Title as="div">
          <center>
            <strong>
              <h1> Cards</h1>
            </strong>
          </center>
        </Card.Title>
        <Card.Text as="div">ID: {id}</Card.Text>
        <Card.Text as="h3">City: {city}</Card.Text>

        <hr></hr>
      </Card.Body>
    </Card>
  );
};

export default ListCard;
