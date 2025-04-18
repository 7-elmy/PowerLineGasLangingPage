

import { configureStore } from '@reduxjs/toolkit';
import { apiReducer } from './Slice/api.slice';
// import { categoryReducer } from './Slices/Category.slice';



const store = configureStore({
  reducer: {
    api:apiReducer
  }
});

export default store;
