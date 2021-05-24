// import React from "react";
// import { Button, Card, Col, NavLink, Row } from "react-bootstrap";
import classes from "../Assests/slider.css";

// const ListCard = ({
//   id,
//   city,
//   hospital,
//   contact,
//   address,
//   bed_status,
//   totalBeds,
//   bed_division,
//   avail_beds,
// }) => {
//   const bedDivision = bed_division.split(",");
//   const contactSplit = contact.split(",");

//   return (
//     <Card className="my-3 p-3 card_design">
//       <Card.Body>
//         <Card.Title as="div">
//           <center>
//             <strong>
//               <h3>{city}</h3>
//             </strong>
//           </center>
//           <hr></hr>
//         </Card.Title>
//         <Row>
//           <h5 className="hos-head">
//             <span>
//               <i class="fas fa-hospital"></i>
//             </span>{" "}
//             : {hospital}
//           </h5>
//         </Row>
//         <Row className="row-data">
//           <Col>
//             <Card.Text>Total Beds: {totalBeds}</Card.Text>
//             <Card.Text>Available Beds: {avail_beds}</Card.Text>

//             <Card.Text>
//               Status:{" "}
//               {bed_status ? (
//                 <i class="far fa-check-circle"></i>
//               ) : (
//                 <i class="fas fa-times"></i>
//               )}
//             </Card.Text>
//           </Col>

//           <Col>
//             <Card.Text>
//               {bedDivision.map((data, i) => (
//                 <p>{data}</p>
//               ))}
//             </Card.Text>
//           </Col>
//         </Row>
//         <a href={address}>
//           {" "}
//           Location <i class="fas fa-map-marker-alt" size="3px"></i>
//         </a>
//         <hr></hr>
//         <Card.Text>
//           <h5>
//             Contacts{" "}
//             <span>
//               <i class="fas fa-phone-square"></i>
//             </span>
//           </h5>
//           {contactSplit.map((data, i) => (
//             <p>{data}</p>
//           ))}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ListCard;
import React from "react";
import { Button, Card, Col, NavLink, Row, ListGroup } from "react-bootstrap";
import "../App.css";
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
    <Card className={classes.info_card}>
      <Card.Header>
        <i className="fas fa-hospital"></i> Hospitals in {city}
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
          <h5 className="text-center">{hospital}</h5>
          <hr></hr>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={7}>Status</Col>
                <Col xs={5}>
                  {" "}
                  {bed_status ? (
                    <i className="far fa-check-circle tick"></i>
                  ) : (
                    <i className="fas fa-times wrong"></i>
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
              </Row>
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
          <div className="border text-justify">
            <h6 className="contacts">
              <i className="fas fa-phone-square-alt"></i> Contacts{" "}
            </h6>
            <div className="contact-div">
              {contactSplit.map((data, i) => (
                <p>
                  <i className="fas fa-hospital-user icon-space"></i>
                  {data}
                </p>
              ))}
            </div>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <div>
          <i className="fas fa-map-marker-alt" size="3px"></i>
          <a href={address}> Location</a>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ListCard;
