// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { contactsReducer, filterReducer } from './phonebookReducer';

// const enhancer = devToolsEnhancer();

// const defaultState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) ?? [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const phonebookReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = createStore(phonebookReducer, defaultState, enhancer);

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

import { contactsReducer } from './contactsSlice';

const persistTodoConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const persistedContactsReducer = persistReducer(
  persistTodoConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
