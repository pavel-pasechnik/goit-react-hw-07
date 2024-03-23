import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(values => values.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
