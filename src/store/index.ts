import { configureStore } from '@reduxjs/toolkit';
import { messengerReducer } from '@/features/Messenger';

const store = configureStore({
  reducer: {
    messenger: messengerReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;