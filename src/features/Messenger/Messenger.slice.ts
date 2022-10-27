import { Chat } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessengerState {
  chats: Chat[],
}

const initialState: MessengerState = {
  chats: [{
    message: 'Hello world again',
    type: 'sender',
    time: 1666811798887,
  }],
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Chat>) {
      state.chats.push(action.payload);
    }
  }
})

export default messengerSlice.reducer;