import React from "react";
import "./App.css";
import "./main.css";
//Calling Bootstrap 4.5 css
import "bootstrap/dist/css/bootstrap.min.css";
//Calling Firebase config setting to call the data
import firebase from "./Firebase";
import Header from "./Components/Header";
import { Col, Container, Row } from "react-bootstrap";
import ListCard from "./Components/ListCard";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentslist: [],
      list: [],
      search: "",
      loading: 1,
      start: "start",
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
        this.setState({ list: studentlist[0], loading: 0 });
      });
  }
  onChange = (e) => {
    this.setState({
      search: e.target.value,
      start: "end",
    });
  };

  render() {
    let filteredNames = this.state.list;
    const { loading } = this.state;
    const { search } = this.state;
    const filteredC = filteredNames.filter((country) => {
      return country.City.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (loading) {
      return <h1>Loading..</h1>;
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
        <div className="input-group">
          <div className="btn1">
            <select
              className="select-btn"
              onChange={this.onChange}
              placeholder="Select City"
            >
              <option value="start">Select City</option>
              <option value="">All</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Bhojpur">Bhojpur</option>
              <option value="Dewas">Dewas</option>
              <option value="Indore">Indore</option>
              {/* <option value="KK">KK</option> */}
            </select>
          </div>
          <div className="btn2">
            <input
              placeholder="Search City"
              onChange={this.onChange}
              className="search-bar"
            ></input>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="container">
          {this.state.start === "start" || search === "start" ? (
            <div>
              <center>
                {" "}
                <h1>What are you looking for?</h1>
              </center>
              <div className="mid-container">
                <div className="mid-btn">ICU Beds</div>
                <div className="mid-btn">Oxygen Beds</div>
                <div className="mid-btn">Oxygen Supplies</div>
                <div className="mid-btn">Medicines</div>
                <div className="mid-btn">Tiffins?</div>
              </div>
            </div>
          ) : (
            <Row>
              {filteredC.map((data, i) => (
                <Col key={i} sm={12} md={6} lg={4} xl={3}>
                  <ListCard key={i} id={data.id} city={data.City} />
                </Col>
              ))}
            </Row>
          )}
          {/* <table id="example" className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>City</th>
                <th>Hospital Name</th>
                <th>Officials</th>
                <th>Charges </th>
                <th>Vacant Bed Without Isolation</th>
                <th>Vacant Bed With Isolation</th>
                <th>Vacant Bed Without ICU</th>
                <th>Vacant Bed With ICU</th>
                <th>Vacant Bed With Ventilator</th>
                <th>Verified</th>
                <th>Last Verified</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {filteredC.map((data, i) => (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.City}</td>
                  <td>{data.Hospital_Category}</td>
                  <td>{data.Officials}</td>
                  <td>{data.Charges}</td>
                  <td>{data.Vacant_Bed_W_Isolation}</td>
                  <td>{data.Vacant_Bed_Isolation}</td>
                  <td>{data.Vacant_Bed_of_ICU_Without}</td>
                  <td>{data.Vacant_Bed_of_ICU_With}</td>
                  <td>{data.Vacant_Bed_With_Vent}</td>
                  <td>{data.Verified}</td>
                  <td>{data.Last_Verified}</td>
                  <td>{data.Source}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
        <div className="banner">
          <div className="banner-1">
            Be a Superhero! Join forces We’re a team of strangers. A common
            mission -- to help India during the Covid crisis, brought us all
            together to create this platform. We need your support. If you’ve
            any verified information, we sincerely request you to add it. Don’t
            worry! We’ll verify it before publishing. If you want to help us in
            verifying and updating all the information, please become a
            volunteer. We need you. India needs you!Indian flag If you’ve
            developed a similar platform, let’s join hands to create a common
            database, enabling consistent information across the platforms.
          </div>
          <div className="banner-2">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </div>
        </div>
      </div>
    );
  }
}
export default App;
