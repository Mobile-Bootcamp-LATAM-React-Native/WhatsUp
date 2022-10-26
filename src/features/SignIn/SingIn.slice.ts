import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

type User = {
  name: string,
}

interface SignInState {
  user?: User | undefined,
  isSignedIn: boolean,
}

const initialState: SignInState = {
  user: undefined,
  isSignedIn: false,
}

export const singInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isSignedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isSignedIn = false;
      state.user = undefined;
    },
  }
})

export const { login, logout } = singInSlice.actions;

export default singInSlice.reducer;