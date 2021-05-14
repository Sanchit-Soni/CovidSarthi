import React from "react";
import { Button, Card, Col, NavLink, Row,ListGroup } from "react-bootstrap";
import '../App.css';
const ListCard = ({
  id,
  city,
  hospital,
  contact,
  address,
  bed_status,
  totalBeds,
  bed_division,
  avail_beds,
}) => {
  const bedDivision = bed_division.split(",");
  const contactSplit = contact.split(",");

  return (
    <Card class="card-deco">
      <Card.Header><i class="fas fa-hospital"></i> Hospitals in {city}</Card.Header>
      <Card.Body>
        {/*<Card.Title as="div">
          <center>
            <strong>
              <h3>{city}</h3>
            </strong>
          </center>
  </Card.Title>*/}
        <Card.Text>
          <h5 class="text-center">
            {hospital}
          </h5><hr></hr>
          <ListGroup>
            <ListGroup.Item>
            <Row>
            <Col xs={7}>Status</Col>
            <Col xs={5}>{" "}{bed_status ? (<i class="far fa-check-circle"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}</Col>
          </Row>
            </ListGroup.Item>

          {/*<Card.Text>
              Status:{" "}
              {bed_status ? (
                <i class="far fa-check-circle"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
              </Card.Text>*/}
            <ListGroup.Item>
            <Row>
            <Col xs={7}>Total Beds</Col>
            <Col xs={5}>{totalBeds}</Col>
            </Row>
            </ListGroup.Item>
            <ListGroup.Item>
          <Row>
            <Col xs={7}>Available Beds</Col>
            <Col xs={5}>{avail_beds}</Col>
          </Row></ListGroup.Item>
            </ListGroup>
            {/*<Card.Text>Total Beds: {totalBeds}</Card.Text><Card.Text>Available Beds: {avail_beds}</Card.Text>*/}
          {/*
          <Col>
            <Card.Text>
              {bedDivision.map((data, i) => (
                <p>{data}</p>
              ))}
            </Card.Text>
              </Col>*/} 
          <br></br>
          <div class="border text-justify">
          <h6 class="contacts">
          <i class="fas fa-phone-square-alt"></i> Contacts{" "}
          </h6>
          <ul>
          {contactSplit.map((data, i) => (
            <p><i class="fas fa-hospital-user icon-space"></i>{data}</p>
          ))}</ul></div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
             <small>
             <i class="fas fa-map-marker-alt" size="3px"></i>
              <a href={address}>{" "} Location</a>
             </small>
        </Card.Footer>
    </Card>
  );
};

export default ListCard;
