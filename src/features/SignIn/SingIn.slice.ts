import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { removeEncryptedItem } from '@/lib';
import { StorageConstants } from '@/shared';

export const logout = createAsyncThunk('logout', async () => {
  // throw new Error('intentional error');
  await removeEncryptedItem(StorageConstants.user);
});

type User = {
  name: string,
}

interface SignInState {
  user?: User | undefined,
}

const initialState: SignInState = {
  user: undefined,
}

export const singInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(logout.fulfilled, state => {
      state.user = undefined;
    }),
    builder.addCase(logout.rejected, state => {
      console.error('Logout has failed')
    })
  },
})

export const { login } = singInSlice.actions;

export default singInSlice.reducer;