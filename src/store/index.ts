import { configureStore } from '@reduxjs/toolkit';
import { messengerReducer } from '@/features/Messenger';
import { singInReducer } from '@/features/SignIn';

const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    signIn: singInReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;