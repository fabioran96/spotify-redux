
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const song = action.payload;
      const index = state.findIndex(fav => fav.id === song.id);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(song);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
