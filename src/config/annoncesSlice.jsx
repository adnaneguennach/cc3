import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  annonces: [
    {
      id: 1739820096855,
      title: "dd",
      price: "dd",
      location: "dd",
      mapLink: "dd",
      image: null,
      reserved: true,
    },
  ],
};

const annoncesSlice = createSlice({
  name: "annonces",
  initialState,
  reducers: {
    addAnnonce: (state, action) => {
      state.annonces.push(action.payload);
    },
    updateAnnonce: (state, action) => {
      const index = state.annonces.findIndex(
        (annonce) => annonce.id === action.payload.id
      );
      if (index !== -1) {
        state.annonces[index] = action.payload;
      }
    },
    addReservation: (state, action) => {
      const { annonceId, reservation } = action.payload;
      const annonce = state.annonces.find((ann) => ann.id === annonceId);
      if (annonce) {
        annonce.reservations.push(reservation);
      }
    },
    updateReservation: (state, action) => {
      const { annonceId, reservationId, status } = action.payload;
      const annonce = state.annonces.find((ann) => ann.id === annonceId);
      if (annonce) {
        const reservation = annonce.reservations[reservationId];
        if (reservation) {
          reservation.status = status;
        }
      }
    },
    Reserve: (state, action) => {
      const annonce = state.annonces.find((ann) => ann.id == action.payload.id && ann.email == action.payload.userEmail ) ;
      if (annonce) {
        annonce.reserved = true;
      }
    },
  },
});

export const {
  addAnnonce,
  Reserve,
  updateAnnonce,
  addReservation,
  updateReservation,
} = annoncesSlice.actions;

export default annoncesSlice.reducer;
