import React from "react";
import "./App.css";
//Calling Bootstrap 4.5 css
import "bootstrap/dist/css/bootstrap.min.css";
//Calling Firebase config setting to call the data
import firebase from "./Firebase";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { studentslist: [], list: [], search: "" };
  }

  componentDidMount() {
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
          this.setState({ list: studentlist[0] });
        });
      });
  }
  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    let filteredNames = this.state.list;
    const { search } = this.state;
    const filteredC = filteredNames.filter((country) => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="MainDiv">
        <div className="jumbotron text-center bg-sky">
          <h3>How to show firebase data in reactjs?</h3>
        </div>
        <center>
          <select onChange={this.onChange}>
            <option value="">All</option>
            <option value="ABC">ABC</option>
            <option value="MM">MM</option>
            <option value="KK">KK</option>
            {/* <option value="audi">Audi</option> */}
          </select>
          <input
            placeholder="Search Hospital"
            onChange={this.onChange}
            className="search-bar"
          ></input>
        </center>
        <div className="container">
          <table
            id="example"
            className="table table-striped table-dark table-hover"
          >
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Hospital Name</th>
                <th>Total Beds</th>
                <th>Available</th>
                {/* <th>Section</th> */}
                {/* <th>Roll no</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredC.map((data, i) => (
                <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.beds}</td>
                  <td>{data.status}</td>
                  {/* <td>{data.section}</td> */}
                  {/* <td>{data.rollno}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
