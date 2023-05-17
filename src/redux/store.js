import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './Contacts/contactsSlice';

// const persistTodoConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedContactsReducer = persistReducer(
//   persistTodoConfig,
//   contactsReducer
// );

export const store = configureStore({
  reducer: contactsReducer,
});

// export const persistor = persistStore(store);
