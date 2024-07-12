import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'song',
  initialState: null,
  reducers: {
    setCurrentSong: (state, action) => action.payload,
  },
});

export const { setCurrentSong } = songSlice.actions;
export default songSlice.reducer;