const defaultState = {
  bookedSeat: [
    {
      name: "A",
      numOfSeat: "3",
      seat: [
        { soGhe: "A11", gia: 0, daDat: true },
        { soGhe: "A12", gia: 0, daDat: true },
      ],
    },
    {
      name: "B",
      numOfSeat: "3",
      seat: [
        { soGhe: "A11", gia: 0, daDat: true },
        { soGhe: "A12", gia: 0, daDat: true },
      ],
    },
  ],

  pickingSeat: [
    // { soGhe: "b11", gia: 0, daDat: false },
    // { soGhe: "b12", gia: 0, daDat: false },
  ],
};

export const bookingTicketReducer = (state = defaultState, action) => {
  switch (action.type) {
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

      //   let seat = action.seat;
      //   state.pickingSeat = seat;
      //   return { ...state };
    }

    case "CONFIRM_SEAT": {
      if (state.pickingSeat.length > 0) {
        let newStatePick = [...state.pickingSeat];
        let newStateBook = [...state.bookedSeat];

        let fakeName = "ABC";
        let fakeSeat = "5";

        newStatePick.map((item, index) => {
          item.daDat = true;
        });

      
        let newArray = {
            name: fakeName,
            numOfSeat: fakeSeat,
            seat: newStatePick
        }


         

        // let applyArray = [];
        newStateBook.push(newArray);
        console.log("hahaha: ", newStateBook);

        state.bookedSeat = newStateBook;
        let emptyArray = [];
        state.pickingSeat = emptyArray;

        console.log("bbbbbb: ", state);

        return { ...state };
      }
    }

    default:
      return state;
  }
};
