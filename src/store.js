import { configureStore } from '@reduxjs/toolkit';
import songReducer from './redux/songSlice';
import favoritesReducer from './redux/favoritesSlice';

const store = configureStore({
  reducer: {
    song: songReducer,
    favorites: favoritesReducer,
  },
});

export default store;
