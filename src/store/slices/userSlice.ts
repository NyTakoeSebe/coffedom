import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';
import type { RootState } from '../store';

interface userState {
  isAuth: boolean;
  user?: User;
}

const initialState: userState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    removeUser: (state) => {
      state.user = initialState.user;
      state.isAuth = initialState.isAuth;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserId = (state: RootState) => state.user.user?._id;
export const selectAuthState = (state: RootState) => state.user.isAuth;
export default userSlice.reducer;
