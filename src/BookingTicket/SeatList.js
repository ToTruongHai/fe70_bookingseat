import React, { Component } from "react";
import SeatItem from "./SeatItem";

export default class SeatList extends Component {
  renderSeatList = () => {
    let { seatList } = this.props;
    return seatList.map((seat, index) => {
      if (seat.hang === "") {
        // Make the first row
        return (
          <tr key={index}>
            <td>{seat.hang}</td>
            {seat.danhSachGhe.map((ghe, index) => {
              // Make a gap between 4 and 5
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
        // Make a gap between E and F
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
              // Make a gap between 4 and 5
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
                // Make all the seat
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
