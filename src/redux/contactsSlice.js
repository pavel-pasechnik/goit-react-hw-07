// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// ------ Action -----
// export const addContact = object => {
//   return {
//     type: 'contact/addContact',
//     payload: object,
//   };
// };

// export const deleteContact = value => {
//   return {
//     type: 'contact/deleteContact',
//     payload: value,
//   };
// };

// ----- Reducer ------
// export const contactsReducer = (state = { items: [] }, action) => {
//   switch (action.type) {
//     case 'contact/addContact':
//       return {
//         ...state,
//         items: state.items.concat(action.payload),
//       };
//     case 'contact/deleteContact':
//       return {
//         ...state,
//         items: state.items.filter(values => values.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// ------ cerateAction and createReducer ------
// export const addContact = createAction('contact/addContact');
// export const deleteContact = createAction('contact/deleteContact');
//
// export const contactsReducer = createReducer({ items: [] }, builder => {
//   builder
//     .addCase(addContact, (state, action) => {
//       state.items.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//       state.items = state.items.filter(values => values.id !== action.payload);
//     });
// });

// ------ createSlice -----
const slice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: value => {
        return {
          payload: { ...value, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(values => values.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
