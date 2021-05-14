import React from "react";
import { Button, Card, Col, NavLink, Row, ListGroup } from "react-bootstrap";

const PlasmaCards = ({
  id,
  city,
  area,
  pno,
  name,
  comments,
  verified,
  last_verified,
}) => {
  return (
    // <Card className="my-3 p-3 card_design">
    //   <Card.Body>
    //     <Card.Title as="div" className="card-title2">
    //       <center>
    //         <strong>
    //           <h4>City: {city}</h4>
    //         </strong>
    //         verified :{" "}
    //         <span>
    //           {verified ? (
    //             <i class="far fa-check-circle"></i>
    //           ) : (
    //             <i class="fas fa-times"></i>
    //           )}
    //         </span>
    //       </center>
    //     </Card.Title>
    //     <Card.Text as="div">Donor Name: {name}</Card.Text>
    //     <Card.Text as="div">Area: {area}</Card.Text>
    //     <Card.Text as="div">Comments: {comments}</Card.Text>

    //     <hr></hr>
    //     <Card.Text as="div">Contact: {pno}</Card.Text>
    //   </Card.Body>
    // </Card>

    <Card className="my-3  card_design">
      {/* <Card.Body>
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
      </Card.Body> */}

      <Card.Header>
        <i className="fas fa-hospital"></i> Plasma Donor in {city}
      </Card.Header>
      <Card.Body>
        {/*<Card.Title as="div">
          <center>
            <strong>
              <h3>{city}</h3>
            </strong>
          </center>
  </Card.Title>*/}
        <Card.Text>
          <h5 className="text-center">{name}</h5>
          <center>
            <p className="brand-name">Last Verified:{last_verified}</p>
          </center>
          <hr></hr>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                  <h6>
                    <span>
                      <i class="far fa-id-card"></i>
                    </span>
                    {"  "}
                    Verified
                  </h6>
                </Col>
                <Col xs={5}>
                  {" "}
                  {verified ? (
                    <i className="far fa-check-circle"></i>
                  ) : (
                    <i className="fas fa-times"></i>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>

            {/*<Card.Text>
              Status:{" "}
              {bed_status ? (
                <i className="far fa-check-circle"></i>
              ) : (
                <i className="fas fa-times"></i>
              )}
              </Card.Text>*/}
            {/* <ListGroup.Item>
              <h6>
                <span>
                  <i class="fas fa-store"></i>
                </span>{" "}
                
              </h6>
              <Row className="address-div">{provider_name}</Row>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <h6 className="">
                <i className="fas fa-phone-square-alt"></i> Contacts{" "}
              </h6>
              <div>
                {/* {contactSplit.map((data, i) => (
                <p>
                  <i className="fas fa-hospital-user icon-space"></i>
                  {data}
                </p>
              ))} */}
                {pno}
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6 className="">
                <i class="far fa-lightbulb"></i> Source{" "}
              </h6>
              <div>
                {/* {contactSplit.map((data, i) => (
                <p>
                  <i className="fas fa-hospital-user icon-space"></i>
                  {data}
                </p>
              ))} */}
                {comments}
              </div>
            </ListGroup.Item>
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
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <div>
          <i className="fas fa-map-marker-alt" size="3px"></i>
          <h6> {area}</h6>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PlasmaCards;
