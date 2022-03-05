import React, { Component } from "react";
import { connect } from "react-redux";

class InputInfor extends Component {
  updateText = (evt) => {
    const evtTarget = evt.target;

    if (evtTarget.id === "name") {
      let person = {
        name: evtTarget.value,
        numOfSeat: this.props.person.numOfSeat,
      };
      this.props.updatePerson(person);
    } else if (evtTarget.id === "numOfSeat") {
      let person = {
        name: this.props.person.name,
        numOfSeat: evtTarget.value,
      };
      this.props.updatePerson(person);
    }
  };

  startPickingSeat = () => {
    const stateValue = this.props.person;
    if (
      stateValue.name !== "" &&
      stateValue.numOfSeat !== "" &&
      isNaN(stateValue.numOfSeat) === false
    ) {
      let countAvailableSeatLeft = 0;
      this.props.arrSeat.forEach((e) => {
        let danhSach = e.danhSachGhe;
        let resultFilter = danhSach.filter(
          (element) => element.daDat === false
        );
        countAvailableSeatLeft += resultFilter.length;
      });

      if (
        stateValue.numOfSeat <= 120 &&
        stateValue.numOfSeat > 0 &&
        countAvailableSeatLeft >= stateValue.numOfSeat
      ) {
        document.querySelector("#readyToPickText").style.display = "block";
        document.querySelector("#name").setAttribute("readonly", null);
        document.querySelector("#numOfSeat").setAttribute("readonly", null);
        this.props.allowBookingNow();
      } else {
        alert(
          "Please enter number within range from 1 to 120  (only " +
            countAvailableSeatLeft +
            " seat left)"
        );
      }
    } else {
      alert("Please Enter Name and Number Of Seat");
    }
  };

  render() {
    return (
      <div>
        <form className="form-group row was-validated">
          <div className="col-6">
            <label>
              <b>Name</b>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              value={this.props.person.name}
              onChange={(evt) => {
                this.updateText(evt);
              }}
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
          <div className="col-6">
            <label>
              <b>Number of seat</b>
              <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              pattern="[0-9]*"
              id="numOfSeat"
              value={this.props.person.numOfSeat}
              onChange={(evt) => {
                this.updateText(evt);
              }}
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
        </form>
        <button
          className={`btn btn-primary`}
          onClick={() => {
            this.startPickingSeat();
          }}
        >
          Start Selecting
        </button>
      </div>
    );
  }
}

const mapStateTopProps = (rootReducer) => {
  return {
    bookedSeat: rootReducer.bookingTicketReducer.bookedSeat,
    allowStatus: rootReducer.bookingTicketReducer.isAllowBooking,
    person: rootReducer.bookingTicketReducer.person,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    updatePerson: (person) => {
      const action = {
        type: "UPDATE_PERSON",
        person: person,
      };
      dispath(action);
    },
    allowBookingNow: () => {
      const action = {
        type: "ALLOW_BOOKING",
      };
      dispath(action);
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(InputInfor);
