import React, { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardBody>
            <b>Họ và tên: {dish.name}</b>
            <p>Ngày sinh: {dish.doB}</p>
            <p>Ngày vào công ty: {dish.startDate}</p>
            <p>Phòng ban: {dish.numberOfStaff}</p>
            <p>Số ngày nghỉ còn lại: {dish.annualLeave}</p>
            <p>Số ngày đã làm thêm: {dish.overTime}</p>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
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
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
