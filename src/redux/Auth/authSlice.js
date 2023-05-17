import { createSlice } from '@reduxjs/toolkit/dist';
import {
  loginOperation,
  logoutOperation,
  refreshOperation,
  registerOperation,
} from './authOperations';

const initialState = {
  isAuth: false,
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerOperation.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          user: payload.user,
          token: payload.token,
          isRefreshing: false,
          error: null,
        };
      })
      .addCase(registerOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginOperation.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          user: payload.user,
          token: payload.token,
          isRefreshing: false,
          error: null,
        };
      })
      .addCase(loginOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logoutOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutOperation.fulfilled, (state, { payload }) => {
        return {
          initialState,
        };
      })
      .addCase(logoutOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(refreshOperation.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshOperation.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          user: payload.user,
          token: payload.token,
          isRefreshing: false,
          error: null,
        };
      })
      .addCase(refreshOperation.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { userLogin, userLogout } = authSlice.actions;
