import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./BookingTicket.module.css";
import SeatList from "./SeatList";

let arrSeat = [
  {
    hang: "",
    danhSachGhe: [
      { soGhe: "1", gia: 0 },
      { soGhe: "2", gia: 0 },
      { soGhe: "3", gia: 0 },
      { soGhe: "4", gia: 0 },
      { soGhe: "5", gia: 0 },
      { soGhe: "6", gia: 0 },
      { soGhe: "7", gia: 0 },
      { soGhe: "8", gia: 0 },
      { soGhe: "9", gia: 0 },
      { soGhe: "10", gia: 0 },
      { soGhe: "11", gia: 0 },
      { soGhe: "12", gia: 0 },
    ],
  },
  {
    hang: "A",
    danhSachGhe: [
      { soGhe: "A1", gia: 75000, daDat: false },
      { soGhe: "A2", gia: 75000, daDat: false },
      { soGhe: "A3", gia: 75000, daDat: false },
      { soGhe: "A4", gia: 75000, daDat: false },
      { soGhe: "A5", gia: 75000, daDat: false },
      { soGhe: "A6", gia: 75000, daDat: false },
      { soGhe: "A7", gia: 75000, daDat: false },
      { soGhe: "A8", gia: 75000, daDat: false },
      { soGhe: "A9", gia: 75000, daDat: false },
      { soGhe: "A10", gia: 75000, daDat: false },
      { soGhe: "A11", gia: 0, daDat: true },
      { soGhe: "A12", gia: 0, daDat: true },
    ],
  },
  {
    hang: "B",
    danhSachGhe: [
      { soGhe: "B1", gia: 75000, daDat: false },
      { soGhe: "B2", gia: 75000, daDat: false },
      { soGhe: "B3", gia: 75000, daDat: false },
      { soGhe: "B4", gia: 75000, daDat: false },
      { soGhe: "B5", gia: 75000, daDat: false },
      { soGhe: "B6", gia: 75000, daDat: false },
      { soGhe: "B7", gia: 75000, daDat: false },
      { soGhe: "B8", gia: 75000, daDat: false },
      { soGhe: "B9", gia: 75000, daDat: false },
      { soGhe: "B10", gia: 75000, daDat: false },
      { soGhe: "B11", gia: 75000, daDat: false },
      { soGhe: "B12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "C",
    danhSachGhe: [
      { soGhe: "C1", gia: 75000, daDat: false },
      { soGhe: "C2", gia: 75000, daDat: false },
      { soGhe: "C3", gia: 75000, daDat: false },
      { soGhe: "C4", gia: 75000, daDat: false },
      { soGhe: "C5", gia: 75000, daDat: false },
      { soGhe: "C6", gia: 75000, daDat: false },
      { soGhe: "C7", gia: 75000, daDat: false },
      { soGhe: "C8", gia: 75000, daDat: false },
      { soGhe: "C9", gia: 75000, daDat: false },
      { soGhe: "C10", gia: 75000, daDat: false },
      { soGhe: "C11", gia: 75000, daDat: false },
      { soGhe: "C12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "D",
    danhSachGhe: [
      { soGhe: "D1", gia: 75000, daDat: false },
      { soGhe: "D2", gia: 75000, daDat: false },
      { soGhe: "D3", gia: 75000, daDat: false },
      { soGhe: "D4", gia: 75000, daDat: false },
      { soGhe: "D5", gia: 75000, daDat: false },
      { soGhe: "D6", gia: 75000, daDat: false },
      { soGhe: "D7", gia: 75000, daDat: false },
      { soGhe: "D8", gia: 75000, daDat: false },
      { soGhe: "D9", gia: 75000, daDat: false },
      { soGhe: "D10", gia: 75000, daDat: false },
      { soGhe: "D11", gia: 75000, daDat: false },
      { soGhe: "D12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "E",
    danhSachGhe: [
      { soGhe: "E1", gia: 75000, daDat: false },
      { soGhe: "E2", gia: 75000, daDat: false },
      { soGhe: "E3", gia: 75000, daDat: false },
      { soGhe: "E4", gia: 75000, daDat: false },
      { soGhe: "E5", gia: 75000, daDat: false },
      { soGhe: "E6", gia: 75000, daDat: false },
      { soGhe: "E7", gia: 75000, daDat: false },
      { soGhe: "E8", gia: 75000, daDat: false },
      { soGhe: "E9", gia: 75000, daDat: false },
      { soGhe: "E10", gia: 75000, daDat: false },
      { soGhe: "E11", gia: 75000, daDat: false },
      { soGhe: "E12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "F",
    danhSachGhe: [
      { soGhe: "F1", gia: 75000, daDat: false },
      { soGhe: "F2", gia: 75000, daDat: false },
      { soGhe: "F3", gia: 75000, daDat: false },
      { soGhe: "F4", gia: 75000, daDat: false },
      { soGhe: "F5", gia: 75000, daDat: false },
      { soGhe: "F6", gia: 75000, daDat: false },
      { soGhe: "F7", gia: 75000, daDat: false },
      { soGhe: "F8", gia: 75000, daDat: false },
      { soGhe: "F9", gia: 75000, daDat: false },
      { soGhe: "F10", gia: 75000, daDat: false },
      { soGhe: "F11", gia: 75000, daDat: false },
      { soGhe: "F12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "G",
    danhSachGhe: [
      { soGhe: "G1", gia: 75000, daDat: false },
      { soGhe: "G2", gia: 75000, daDat: false },
      { soGhe: "G3", gia: 75000, daDat: false },
      { soGhe: "G4", gia: 75000, daDat: false },
      { soGhe: "G5", gia: 75000, daDat: false },
      { soGhe: "G6", gia: 75000, daDat: false },
      { soGhe: "G7", gia: 75000, daDat: false },
      { soGhe: "G8", gia: 75000, daDat: false },
      { soGhe: "G9", gia: 75000, daDat: false },
      { soGhe: "G10", gia: 75000, daDat: false },
      { soGhe: "G11", gia: 75000, daDat: false },
      { soGhe: "G12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "H",
    danhSachGhe: [
      { soGhe: "H1", gia: 75000, daDat: false },
      { soGhe: "H2", gia: 75000, daDat: false },
      { soGhe: "H3", gia: 75000, daDat: false },
      { soGhe: "H4", gia: 75000, daDat: false },
      { soGhe: "H5", gia: 75000, daDat: false },
      { soGhe: "H6", gia: 75000, daDat: false },
      { soGhe: "H7", gia: 75000, daDat: false },
      { soGhe: "H8", gia: 75000, daDat: false },
      { soGhe: "H9", gia: 75000, daDat: false },
      { soGhe: "H10", gia: 75000, daDat: false },
      { soGhe: "H11", gia: 75000, daDat: false },
      { soGhe: "H12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "I",
    danhSachGhe: [
      { soGhe: "I1", gia: 75000, daDat: false },
      { soGhe: "I2", gia: 75000, daDat: false },
      { soGhe: "I3", gia: 75000, daDat: false },
      { soGhe: "I4", gia: 75000, daDat: false },
      { soGhe: "I5", gia: 75000, daDat: false },
      { soGhe: "I6", gia: 75000, daDat: false },
      { soGhe: "I7", gia: 75000, daDat: false },
      { soGhe: "I8", gia: 75000, daDat: false },
      { soGhe: "I9", gia: 75000, daDat: false },
      { soGhe: "I10", gia: 75000, daDat: false },
      { soGhe: "I11", gia: 75000, daDat: false },
      { soGhe: "I12", gia: 75000, daDat: false },
    ],
  },
  {
    hang: "J",
    danhSachGhe: [
      { soGhe: "J1", gia: 75000, daDat: false },
      { soGhe: "J2", gia: 75000, daDat: false },
      { soGhe: "J3", gia: 75000, daDat: false },
      { soGhe: "J4", gia: 75000, daDat: false },
      { soGhe: "J5", gia: 75000, daDat: false },
      { soGhe: "J6", gia: 75000, daDat: false },
      { soGhe: "J7", gia: 75000, daDat: false },
      { soGhe: "J8", gia: 75000, daDat: false },
      { soGhe: "J9", gia: 75000, daDat: false },
      { soGhe: "J10", gia: 75000, daDat: false },
      { soGhe: "J11", gia: 75000, daDat: false },
      { soGhe: "J12", gia: 75000, daDat: false },
    ],
  },
];

class BookingSeat extends Component {
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

  confirmBooking = () => {
    if (this.props.allowStatus.status === true) {
      if (
        Number(this.props.person.numOfSeat) === this.props.pickingSeat.length
      ) {
        this.props.bookTheSeat(this.props.person);
        this.props.disableBookingNow();
        document.querySelector("#name").removeAttribute("readonly");
        document.querySelector("#numOfSeat").removeAttribute("readonly");
        document.querySelector("#readyToPickText").style.display = "none";

        let person = {
          name: "",
          numOfSeat: "",
        };
        this.props.updatePerson(person);
      } else {
        alert("Please Pick " + this.props.person.numOfSeat + " Seat");
      }
    }
  };

  startPickingSeat = () => {
    const stateValue = this.props.person;
    if (
      stateValue.name !== "" &&
      stateValue.numOfSeat !== "" &&
      isNaN(stateValue.numOfSeat) === false
    ) {
      if (stateValue.numOfSeat <= 120 && stateValue.numOfSeat > 0) {
        document.querySelector("#readyToPickText").style.display = "block";
        document.querySelector("#name").setAttribute("readonly", null);
        document.querySelector("#numOfSeat").setAttribute("readonly", null);
        this.props.allowBookingNow();
      } else {
        alert("Please enter number within range from 1 to 120");
      }
    } else {
      alert("Please Enter Name and Number Of Seat");
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-white pt-5 pb-5 text-center">
          MOVIE SEAT SELECTION
        </h1>
        <div className={`col-12 ${styles.content__bg}`}>
          <h5 className="text-danger mt-3">
            Fill The Required Details Below And Select Your Seats
          </h5>
          {/* ---INPUT FIELD--- */}
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
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
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
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
          </form>
          {/* ---BUTTON START SELECT--- */}
          <button
            className={`btn btn-primary`}
            onClick={() => {
              this.startPickingSeat();
            }}
          >
            Start Selecting
          </button>
          {/* ---SEAT INFO--- */}
          <ul className={`nav mt-3 ${styles.navSeat}`}>
            <li className="nav-item">
              <div className="d-flex">
                <div className={`${styles.selectedSeat}`} />
                Selected Seat
              </div>
            </li>
            <li className="nav-item">
              <div className="d-flex">
                <div className={`${styles.reservedSeat}`}></div>
                Reserved Seat
              </div>
            </li>
            <li className="nav-item">
              <div className="d-flex">
                <div className={`${styles.emptySeat}`}></div>
                Empty Seat
              </div>
            </li>
          </ul>
          {/* ---SEAT TABLE--- */}
          <div className="col-12 p-0 mt-5">
            <h4
              id="readyToPickText"
              className="text-center text-white bg-danger p-3"
              style={{ display: "none" }}
            >
              Please Select your Seats NOW!
            </h4>
            <table className={`table ${styles.seatTable}`}>
              <SeatList seatList={arrSeat} />
            </table>
            <div className={`${styles.screenText}`}>
              <p className="text-center m-0">SCREEN THIS WAY</p>
            </div>
          </div>
          {/* ---CONFIRM SELECTION--- */}
          <div className={`mt-5 ml-auto mr-auto ${styles.widthFitcontent}`}>
            <button
              onClick={() => {
                this.confirmBooking();
              }}
              className={`btn btn-success `}
            >
              Confirm Selection
            </button>
          </div>
          {/* ---TABLE LIST OF BOOKED SEAT--- */}
          <table className={`table mt-5 ${styles.displayBookedSeat}`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of seat</th>
                <th>Seat</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.bookedSeat.map((booked, index) => {
                return (
                  <tr key={index}>
                    <td>{booked.name}</td>
                    <td>{booked.numOfSeat}</td>
                    <td style={{ overflowWrap: "anywhere" }}>
                      {booked.seat.map((s, index, row) => {
                        if (index + 1 === row.length) {
                          return (
                            <React.Fragment key={index}>
                              {s.soGhe}
                            </React.Fragment>
                          );
                        } else {
                          return (
                            <React.Fragment key={index}>
                              {s.soGhe},&nbsp;
                            </React.Fragment>
                          );
                        }
                      })}
                    </td>
                    <td>{booked.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (rootReducer) => {
  return {
    bookedSeat: rootReducer.bookingTicketReducer.bookedSeat,
    allowStatus: rootReducer.bookingTicketReducer.isAllowBooking,
    pickingSeat: rootReducer.bookingTicketReducer.pickingSeat,
    person: rootReducer.bookingTicketReducer.person,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    bookTheSeat: (person) => {
      const action = {
        type: "CONFIRM_SEAT",
        person: person,
      };
      dispath(action);
    },
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
    disableBookingNow: () => {
      const action = {
        type: "DISABLE_BOOKING",
      };
      dispath(action);
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(BookingSeat);
