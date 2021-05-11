import React from "react";
import { Button, Card } from "react-bootstrap";

const OxygenCards = ({
  id,
  city,
  area,
  provider_name,
  contact,
  comments,
  verified,
  last_verified,
  source,
}) => {
  return (
    <Card className="my-3 p-3 card_design">
      <Card.Body>
        <Card.Title as="div">
          <center>
            <strong>
              <h3>{city}</h3>
              verified :{" "}
              <span>
                {verified ? (
                  <i class="far fa-check-circle"></i>
                ) : (
                  <i class="fas fa-times"></i>
                )}
              </span>
            </strong>
          </center>
          <hr></hr>
        </Card.Title>
        <Card.Text>Area: {area}</Card.Text>
        <Card.Text>Provider:{provider_name}</Card.Text>
        <Card.Text>Contact: {contact}</Card.Text>
        <Card.Text>Comments: {comments}</Card.Text>
        <Card.Text>Source: {source}</Card.Text>

        <hr></hr>
      </Card.Body>
    </Card>
  );
};

export default OxygenCards;
