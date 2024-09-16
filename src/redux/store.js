import { configureStore } from '@reduxjs/toolkit';
import { storeReducer } from './reducer';



const store = configureStore({
  reducer: {
    auth: storeReducer ,
  },
});

export default store;