import React, { Component } from "react";
import SeatItem from "./SeatItem";

export default class SeatList extends Component {
  renderSeatList = () => {
    let { seatList } = this.props;
    return seatList.map((seat, index) => {
      if (seat.hang === "") {
        return (
          <tr key={index}>
            <td>{seat.hang}</td>
            {seat.danhSachGhe.map((ghe, index) => {
              if (index === 4) {
                return (
                  <React.Fragment key={index}>
                    <td key={index}>{ghe.soGhe}</td>
                    <td></td>
                    <td></td>
                  </React.Fragment>
                );
              } else {
                return <td key={index}>{ghe.soGhe}</td>;
              }
            })}
          </tr>
        );
      } else if (seat.hang === "E") {
        return (
          <React.Fragment key={index}>
            <tr key={index}>
              <td>{seat.hang}</td>
              {seat.danhSachGhe.map((ghe, indexGhe) => {
                if (indexGhe === 4) {
                  return (
                    <React.Fragment key={indexGhe}>
                      <td key={indexGhe}>
                        <SeatItem ghe={ghe} />
                      </td>
                      <td></td>
                      <td></td>
                    </React.Fragment>
                  );
                } else {
                  return (
                    <td key={indexGhe}>
                      <SeatItem ghe={ghe} />
                    </td>
                  );
                }
              })}
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </React.Fragment>
        );
      } else {
        return (
          <tr key={index}>
            <td>{seat.hang}</td>
            {seat.danhSachGhe.map((ghe, indexGhe) => {
              if (indexGhe === 4) {
                return (
                  <React.Fragment key={indexGhe}>
                    <td key={indexGhe}>
                      <SeatItem ghe={ghe} />
                    </td>
                    <td></td>
                    <td></td>
                  </React.Fragment>
                );
              } else {
                return (
                  <td key={indexGhe}>
                    <SeatItem ghe={ghe} />
                  </td>
                );
              }
            })}
          </tr>
        );
      }
    });
  };
  render() {
    return <tbody>{this.renderSeatList()}</tbody>;
  }
}
