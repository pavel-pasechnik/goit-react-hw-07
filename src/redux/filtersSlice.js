// import { createAction, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// ------ Action ------
// export const changeFilter = value => {
//   return {
//     type: 'filters/changeFilter',
//     payload: value,
//   };
// };

// ----- Reducer -----
// export const filtersReducer = (state = { name: '' }, action) => {
//   switch (action.type) {
//     case 'filters/changeFilter':
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// ------ cerateAction and createReducer ------
// export const changeFilter = createAction('filters/changeFilter');

// export const filtersReducer = createReducer({ name: '' }, builder => {
//   builder.addCase(changeFilter, (state, action) => {
//     state.name = action.payload;
//   });
// });

// ------ createSlice ------
const slice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
