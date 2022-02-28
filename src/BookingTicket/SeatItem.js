import React, { Component } from "react";
import styles from "./SeatItem.module.css";
import { connect } from "react-redux";

let tempPick = [];

class SeatItem extends Component {
  state = {
    toggle: false,
  };
  renderItemSeat = () => {
    let { ghe, pickedSeat } = this.props;
    if (ghe.daDat === true) {
      return <div className={`${styles.daDat}`}>{ghe.soGhe}</div>;
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
  };
  addTempPick = (ghe, newToggle) => {
    // if (tempPick === undefined) {
    //   tempPick.push(ghe);
    //   this.setState({ toggle: true });
    //   this.props.bookTheSeat(tempPick);
    // } else {
    //   let removeDuplicate = tempPick.findIndex(
    //     (seat) => seat.soGhe === ghe.soGhe
    //   );
    //   if (removeDuplicate !== -1) {
    //     tempPick.splice(removeDuplicate, 1);
    //     this.setState({ toggle: false });
    //     this.props.bookTheSeat(tempPick);
    //   } else {
    //     tempPick.push(ghe);
    //     this.setState({ toggle: true });
    //     this.props.bookTheSeat(tempPick);
    //   }
    // }

      this.setState({ toggle: newToggle });
      this.props.bookTheSeat(ghe);
    
  };
  render() {
    return <React.Fragment>{this.renderItemSeat()}</React.Fragment>;
  }
}
const mapStateTopProps = (rootReducer) => {
  return {
    pickedSeat: rootReducer.bookingTicketReducer.pickingSeat,
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
