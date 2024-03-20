import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { contactsReducer } from './contactsSlice';
// import { filtersReducer } from './filtersSlice';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

// const initialState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: '',
//   },
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });
// export const store = createStore(rootReducer, composeWithDevTools());

// export const store = configureStore({
//   reducer: { contacts: contactsReducer, filters: filtersReducer },
// });

// ------ Added redux-persist ------
export const store = configureStore({
  reducer: { contacts: persistedContactsReducer, filters: filtersReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
