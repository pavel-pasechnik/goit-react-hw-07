import { addContact, deleteContact, fetchContacts } from '../redux/contactsOps.js';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectFilter } from './filtersSlice.js';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  // reducers: {
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter(values => values.id !== action.payload);
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(contacts => contacts.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

// export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(filter.toLowerCase().trim())
// );
// };

// Memorization of the filter
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
