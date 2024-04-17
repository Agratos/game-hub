import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scoredGames: 0,
};

const scoreGameSlice = createSlice({
  name: 'score-game',
  initialState,
  reducers: {
    countScoredGames: (state) => {
      state.scoredGames += 1;
    },
  },
});

export const { countScoredGames } = scoreGameSlice.actions;
export default scoreGameSlice.reducer;
