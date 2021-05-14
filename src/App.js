import React from "react";
import "./App.css";
import "./main.css";
//Calling Bootstrap 4.5 css
import "bootstrap/dist/css/bootstrap.min.css";
//Calling Firebase config setting to call the data
import firebase from "./Firebase";
import Header from "./Components/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import ListCard from "./Components/ListCard";
import OxygenCards from "./Components/OxygenCards";
import PlasmaCards from "./Components/PlasmaCards";
import MedicineCards from "./Components/MedicineCards";

import Fade from "react-reveal/Fade";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentslist: [],
      list: [],
      medicines_data: [],
      oxygen_data: [],
      plasma_data: [],
      checker: "Hospitals",
      search: "",
      loading: 1,
      start: "start",
      active: "red",
    };
  }

  async componentDidMount() {
    firebase
      .database()
      .ref("sheets")
      .on("value", (snapshot) => {
        let studentlist = [];
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist }, () => {
          console.log(this.state.studentslist);
        });
        this.setState({
          list: studentlist[0],
          loading: 0,
          medicines_data: studentlist[1],
          oxygen_data: studentlist[2],
          plasma_data: studentlist[3],
        });
      });
  }
  onChange = (e) => {
    this.setState({
      search: e.target.value,
      start: "end",
    });
  };
  onTypeChange = (e) => {
    this.setState({
      checker: e.target.value,
    });
  };

  render() {
    let filteredNames = this.state.list;
    let filteredOxygen = this.state.oxygen_data;
    let filteredPlasma = this.state.plasma_data;
    let filteredMedicine = this.state.medicines_data;
    console.log(this.state.oxygen_data);
    const { loading } = this.state;
    const { search } = this.state;
    const filteredC = filteredNames.filter((country) => {
      return country.City.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    const filteredO = filteredOxygen.filter((country) => {
      return country.City.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    const filteredP = filteredPlasma.filter((country) => {
      return country.City.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    const filteredM = filteredMedicine.filter((country) => {
      return country.City.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (loading) {
      return <div class="loader">Loading...</div>;
    }
    console.log(this.state.list);
    return (
      <div>
        <Header />
        <div className="container-1">
          <center>
            <h1>CovidSarthi.in</h1>
            <div className="container1-text">
              Powered by an army of selfless volunteers, working 24x7 to help
              you find verified resources related to all COVID needs. Follow us
              on Twitter for live updates
            </div>
          </center>
        </div>
        <form>
          <div className="input-group-div">
            <div className="btn1">
              <select className="select-btn" disabled>
                <option>Madhya Pradesh</option>
              </select>
            </div>
            <div className="btn2">
              <select
                className="select-btn"
                onChange={this.onChange}
                placeholder="Select City"
                required
              >
                <option value="start">Select City</option>
                <option value="">All</option>
                {/* <option value="Bhopal">Bhopal</option>
              <option value="Bhojpur">Bhojpur</option>
              <option value="Dewas">Dewas</option>
              <option value="Indore">Indore</option> */}
                {/* <option value="KK">KK</option> */}
                {this.state.list.map((data) => (
                  <option value={data.City}>{data.City}</option>
                ))}
              </select>
            </div>
            {/* <div className="btn2">
              <input
                placeholder="Search City"
                onChange={this.onChange}
                className="search-bar"
              ></input>
            </div> */}
            <div className="btn3">
              <select onChange={this.onTypeChange} className="select-btn">
                <option value="Hospitals">Hospitals</option>
                <option value="Plasma">Plasma</option>
                <option value="Medicines">Medicines</option>
                <option value="Oxygen">Oxygen</option>
              </select>
            </div>
          </div>
          <center>
            {" "}
            <input
              className="btn-reset"
              type="reset"
              value="Reset"
              onClick={() => this.setState({ start: "start" })}
            />
          </center>

          <br></br>
        </form>
        <br></br>

        <div className="container">
          {this.state.start === "start" || search === "start" ? (
            <div>
              <Fade>
                <center>
                  {" "}
                  <h1>What are you looking for?</h1>
                </center>
                <center>
                  <h4>({this.state.checker})</h4>
                </center>
                <div className="mid-container">
                  <div
                    className="mid-btn"
                    onClick={() => this.setState({ checker: "Hospitals" })}
                  >
                    Hospitals/Beds
                  </div>
                  <div
                    className="mid-btn"
                    onClick={() => this.setState({ checker: "Oxygen" })}
                  >
                    Oxygen
                  </div>
                  <div
                    className="mid-btn"
                    onClick={() => this.setState({ checker: "Plasma" })}
                  >
                    Plasma
                  </div>
                  <div
                    className="mid-btn"
                    onClick={() => this.setState({ checker: "Medicines" })}
                  >
                    Medicines
                  </div>
                </div>
                <center>
                  <h3>You are at the right place!!</h3>
                </center>
              </Fade>
            </div>
          ) : this.state.checker === "Hospitals" ? (
            <Row>
              {filteredC.map((data, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={4}>
                  <Fade>
                    <ListCard
                      key={i}
                      id={data.id}
                      city={data.City}
                      hospital={data.Hospital_Name}
                      address={data.Hospital_Address}
                      bed_status={data.Bed_Status}
                      totalBeds={data.Total_Beds}
                      avail_beds={data.Available_Beds}
                      bed_division={data.Bed_Division}
                      contact={data.Contact}
                    />
                  </Fade>
                </Col>
              ))}
            </Row>
          ) : this.state.checker === "Oxygen" ? (
            <Row>
              {filteredO.map((data, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={4}>
                  <Fade>
                    <OxygenCards
                      key={i}
                      id={data.id}
                      city={data.City}
                      area={data.Area}
                      provider_name={data.Provider_name}
                      contact={data.contact}
                      comments={data.comments}
                      verified={data.verified}
                      last_verified={data.last_verified}
                      source={data.source}
                    />
                  </Fade>
                </Col>
              ))}
            </Row>
          ) : this.state.checker === "Plasma" ? (
            <Row>
              {filteredP.map((data, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={4}>
                  <Fade>
                    <PlasmaCards
                      key={i}
                      id={data.id}
                      city={data.City}
                      area={data.Area}
                      name={data.Name}
                      pno={data.Phone_number}
                      comments={data.comments}
                      verified={data.verified}
                      last_verified={data.last_verified}
                    />
                  </Fade>
                </Col>
              ))}
            </Row>
          ) : this.state.checker === "Medicines" ? (
            <Row>
              {filteredM.map((data, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={4}>
                  <Fade>
                    <MedicineCards
                      key={i}
                      id={data.id}
                      city={data.City}
                      area={data.Area}
                      Medicine_Name={data.Medicine_Name}
                      Brand_Name={data.Brand_Name}
                      Medical_Name={data.Medical_Name}
                      Medical_Address={data.Medical_Address}
                      contact={data.contact}
                      charges={data.charges}
                      verified={data.verified}
                      source={data.source}
                    />
                  </Fade>
                </Col>
              ))}
            </Row>
          ) : (
            <h1>no data available</h1>
          )}
        </div>
        <div className="banner">
          <div className="banner-1">
            <div className="b1-container">
              Be a Superhero! Join forces We’re a team of strangers. A common
              mission -- to help India during the Covid crisis, brought us all
              together to create this platform. We need your support. If you’ve
              any verified information, we sincerely request you to add it.
              Don’t worry! We’ll verify it before publishing. If you want to
              help us in verifying and updating all the information, please
              become a volunteer. We need you. India needs you!Indian flag If
              you’ve developed a similar platform, let’s join hands to create a
              common database, enabling consistent information across the
              platforms.
            </div>
          </div>
          <div className="banner-2">
            <Fade>
              <div className="b2-container">
                <div className="b2-1">
                  <h5>Join Us</h5>
                </div>
                <div className="b2-1">
                  <h5>Help us to collect Data</h5>
                </div>
                <div className="b2-1">
                  <h5>Fill this form</h5>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
