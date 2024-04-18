import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scoredGames: 0,
  favGames: [],
};

const scoreGameSlice = createSlice({
  name: 'score-game',
  initialState,
  reducers: {
    countScoredGames: (state) => {
      state.scoredGames += 1;
    },
    addFavGames: (state, action) => {
      state.favGames = [...state.favGames, action.payload.gameId];
    },
  },
});

export const { countScoredGames, addFavGames } = scoreGameSlice.actions;
export default scoreGameSlice.reducer;
