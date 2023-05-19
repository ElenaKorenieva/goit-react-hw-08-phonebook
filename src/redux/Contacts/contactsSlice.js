import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations.js';
import { logoutOperation } from 'redux/Auth/authOperations.js';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        const contactIndex = state.contacts.items.findIndex(
          contact => contact.id === payload
        );
        state.contacts.items.splice(contactIndex, 1);
      })
      .addCase(logoutOperation.fulfilled, () => {
        return { ...initialState };
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = null;
        }
      );
  },
});

export const { filterContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
