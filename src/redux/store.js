import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice.js';
import filtersReducer from './filtersSlice.js';

// const initialState = {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   filters: {
//     name: '',
//   },
// };

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
});
