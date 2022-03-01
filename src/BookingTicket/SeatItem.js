import React, { Component } from "react";
import styles from "./SeatItem.module.css";
import { connect } from "react-redux";

let tempPick = [];

class SeatItem extends Component {
  state = {
    toggle: false,
  };
  renderItemSeat = () => {
    let { ghe, allowStatus } = this.props;

    if (ghe.daDat === true) {
      return <div className={`${styles.daDat}`}>{ghe.soGhe}</div>;
    } else {
      if (allowStatus.status === false) {
        return (
          <div
            style={{
              backgroundColor: this.state.toggle ? "green" : "white",
              color: this.state.toggle ? "white" : "black",
              pointerEvents: "none",
            }}
            onClick={() => {
              this.addTempPick(ghe, !this.state.toggle);
            }}
          >
            {ghe.soGhe}
          </div>
        );
      } else {
        return (
          <div
            style={{
              backgroundColor: this.state.toggle ? "green" : "white",
              color: this.state.toggle ? "white" : "black",
            }}
            onClick={() => {
              this.addTempPick(ghe, !this.state.toggle);
            }}
          >
            {ghe.soGhe}
          </div>
        );
      }
    }
  };
  addTempPick = (ghe, newToggle) => {
    let numOfSeat = this.props.person.numOfSeat;
    let totalPick = this.props.pickingSeat;
    if (Number(numOfSeat) > totalPick.length) {
      this.setState({ toggle: newToggle });
      this.props.bookTheSeat(ghe);
    } else if (Number(numOfSeat) === totalPick.length) {
      totalPick.map((pSeat, index) => {
        if (pSeat.soGhe === ghe.soGhe) {
          this.setState({ toggle: newToggle });
          this.props.bookTheSeat(ghe);
        }
      });
    }
  };
  render() {
    return <React.Fragment>{this.renderItemSeat()}</React.Fragment>;
  }
}
const mapStateTopProps = (rootReducer) => {
  return {
    allowStatus: rootReducer.bookingTicketReducer.isAllowBooking,
    person: rootReducer.bookingTicketReducer.person,
    pickingSeat: rootReducer.bookingTicketReducer.pickingSeat,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    bookTheSeat: (seat) => {
      const action = {
        type: "PICKING_SEAT",
        seat: seat,
      };
      dispath(action);
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(SeatItem);
