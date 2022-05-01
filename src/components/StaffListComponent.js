import React, { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      columnDefault: "col-12 col-md 6 col-lg-4 mt-3",
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedStaff: dish });
  }

  onColumnSelect(col) {
    this.setState({
      columnDefault: col,
    });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <b>Họ và tên: {dish.name}</b>
              <p>Ngày sinh: {dateFormat(dish.doB, "dd/mm/yy")}</p>
              <p>Ngày vào công ty: {dateFormat(dish.startDate, "dd/mm/yy")}</p>
              <p>Phòng ban: {dish.department.name}</p>
              <p>Số ngày nghỉ còn lại: {dish.annualLeave}</p>
              <p>Số ngày đã làm thêm: {dish.overTime}</p>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  render() {
    const staff = this.props.staffs.map((dish) => {
      return (
        <div className={this.state.columnDefault}>
          <ul key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <li className="card">
              <CardTitle>{dish.name}</CardTitle>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row m-3">
          <button
            onClick={() => this.onColumnSelect("col-md-2 mt-1")}
            className="btn btn-success mr-3"
          >
            6 cột
          </button>
          <button
            onClick={() => this.onColumnSelect("col-md-3 mt-1")}
            className="btn btn-primary mr-3"
          >
            4 cột
          </button>
          <button
            onClick={() => this.onColumnSelect("col-md-4 mt-1")}
            className="btn btn-info mr-3"
          >
            3 cột
          </button>
          <button
            onClick={() => this.onColumnSelect("col-md-6 mt-1")}
            className="btn btn-secondary mr-3"
          >
            2 cột
          </button>
          <button
            onClick={() => this.onColumnSelect("col-md-12 mt-1")}
            className="btn btn-danger mr-3"
          >
            1 cột
          </button>
        </div>
        <div className="row">{staff}</div>
        <div className="row mt-5">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
