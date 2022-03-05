import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayInfor extends Component {
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
  render() {
    let { styles } = this.props;
    return (
      <div>
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
                          <React.Fragment key={index}>{s.soGhe}</React.Fragment>
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
    updatePerson: (person) => {
      const action = {
        type: "UPDATE_PERSON",
        person: person,
      };
      dispath(action);
    },
    disableBookingNow: () => {
      const action = {
        type: "DISABLE_BOOKING",
      };
      dispath(action);
    },
    bookTheSeat: (person) => {
      const action = {
        type: "CONFIRM_SEAT",
        person: person,
      };
      dispath(action);
    },
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(DisplayInfor);
