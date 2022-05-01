import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Staff from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      // departments: DEPARTMENTS,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

        <Staff staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
