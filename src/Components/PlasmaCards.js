import React from "react";
import { Button, Card } from "react-bootstrap";

const PlasmaCards = ({ id, city, area, pno, name, comments, verified }) => {
  return (
    <Card className="my-3 p-3 card_design">
      <Card.Body>
        <Card.Title as="div" className="card-title2">
          <center>
            <strong>
              <h4>City: {city}</h4>
            </strong>
            verified :{" "}
            <span>
              {verified ? (
                <i class="far fa-check-circle"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </span>
          </center>
        </Card.Title>
        <Card.Text as="div">Donor Name: {name}</Card.Text>
        <Card.Text as="div">Area: {area}</Card.Text>
        <Card.Text as="div">Comments: {comments}</Card.Text>

        <hr></hr>
        <Card.Text as="div">Contact: {pno}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PlasmaCards;
