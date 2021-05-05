import React from "react";
import { Button, Card } from "react-bootstrap";

const MedicineCards = ({
  id,
  city,
  area,
  Medicine_Name,
  Brand_Name,
  Medical_Name,
  Medical_Address,
  contact,
  charges,
  verified,
  source,
}) => {
  return (
    <Card className="my-3 p-3 card_design">
      <Card.Body>
        <Card.Title as="div" className="card-title1">
          <center>
            <strong>
              Medicine Name:<h4>{Medicine_Name}</h4>{" "}
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
        <Card.Text as="div">Brand: {Brand_Name}</Card.Text>
        <Card.Text as="div">City: {city}</Card.Text>
        <Card.Text as="div">Area: {area}</Card.Text>
        <Card.Text as="div">Address: {Medical_Address}</Card.Text>
        <hr></hr>
        <Card.Text as="div">contact: {contact}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MedicineCards;
