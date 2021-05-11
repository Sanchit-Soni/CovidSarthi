import React from "react";
import { Button, Card, Col, NavLink, Row } from "react-bootstrap";

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
    <Card className="my-3 p-3 card_design">
      <Card.Body>
        <Card.Title as="div">
          <center>
            <strong>
              <h3>{city}</h3>
            </strong>
          </center>
          <hr></hr>
        </Card.Title>
        <Row>
          <h5 className="hos-head">
            <span>
              <i class="fas fa-hospital"></i>
            </span>{" "}
            : {hospital}
          </h5>
        </Row>
        <Row className="row-data">
          <Col>
            <Card.Text>Total Beds: {totalBeds}</Card.Text>
            <Card.Text>Available Beds: {avail_beds}</Card.Text>

            <Card.Text>
              Status:{" "}
              {bed_status ? (
                <i class="far fa-check-circle"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </Card.Text>
          </Col>

          <Col>
            <Card.Text>
              {bedDivision.map((data, i) => (
                <p>{data}</p>
              ))}
            </Card.Text>
          </Col>
        </Row>
        <a href={address}>
          {" "}
          Location <i class="fas fa-map-marker-alt" size="3px"></i>
        </a>
        <hr></hr>
        <Card.Text>
          <h5>
            Contacts{" "}
            <span>
              <i class="fas fa-phone-square"></i>
            </span>
          </h5>
          {contactSplit.map((data, i) => (
            <p>{data}</p>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ListCard;
