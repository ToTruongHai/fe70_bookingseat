const defaultState = {
  person: {
    name: "",
    numOfSeat: "",
  },
  isAllowBooking: {
    status: false,
  },
  bookedSeat: [
    {
      name: "Nguyen Van A",
      numOfSeat: "2",
      seat: [
        { soGhe: "A11", gia: 75000, daDat: true },
        { soGhe: "A12", gia: 75000, daDat: true },
      ],
      price: 150000,
    },
  ],

  pickingSeat: [
    // { soGhe: "b11", gia: 0, daDat: false },
    // { soGhe: "b12", gia: 0, daDat: false },
  ],
};

export const bookingTicketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATE_PERSON": {
      let person = action.person;
      state.person = person;
      return { ...state };
    }
    
    case "DISABLE_BOOKING": {
      let isAllow = { ...state.isAllowBooking };
      isAllow.status = false;
      state.isAllowBooking = isAllow;
      return { ...state };
    }

    case "ALLOW_BOOKING": {
      let isAllow = { ...state.isAllowBooking };
      isAllow.status = true;
      state.isAllowBooking = isAllow;
      return { ...state };
    }

    case "PICKING_SEAT": {
      let newState = [...state.pickingSeat];
      let seat = action.seat;
      if (newState === undefined) {
        newState.push(seat);
      } else {
        let removeDuplicate = newState.findIndex(
          (seatState) => seatState.soGhe === seat.soGhe
        );
        if (removeDuplicate !== -1) {
          newState.splice(removeDuplicate, 1);
        } else {
          newState.push(seat);
        }
      }
      state.pickingSeat = newState;
      return { ...state };
    }

    case "CONFIRM_SEAT": {
      if (state.pickingSeat.length > 0) {
        let newStatePick = [...state.pickingSeat];
        let newStateBook = [...state.bookedSeat];
        let person = action.person;
        newStatePick.map((item, index) => {
          item.daDat = true;
        });
        let total = 0;
        for (let i = 0; i < newStatePick.length; i++) {
          let price = newStatePick[i].gia;
          total = total + price;
        }
        let newArray = {
          name: person.name,
          numOfSeat: person.numOfSeat,
          seat: newStatePick,
          price: total,
        };
        newStateBook.push(newArray);
        state.bookedSeat = newStateBook;
        let emptyArray = [];
        state.pickingSeat = emptyArray;
        return { ...state };
      }
    }

    default:
      return state;
  }
};
