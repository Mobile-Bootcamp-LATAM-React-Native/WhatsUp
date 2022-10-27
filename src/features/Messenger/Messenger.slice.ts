import { Chat } from '@/models';
import { createSlice, PayloadAction, createEntityAdapter } from '@reduxjs/toolkit';

interface MessengerState {
  chats: Chat[],
}

const chatAdapter = createEntityAdapter<Chat>({
  selectId: chat => chat.time,
  // sortComparer: (a, b) => a.time < b.time,
})



const initialState: MessengerState = {
  chats: [{
    message: 'Hello world again',
    type: 'sender',
    time: 1666811798887,
  }],
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: chatAdapter.getInitialState(),
  reducers: {
    // addMessage(state, action: PayloadAction<Chat>) {
    //   // state.chats.push(action.payload);
    // }
    addMessage: chatAdapter.upsertOne,
  }
})

// export const { addOne: addMessage } = chatAdapter;

const { selectAll } = chatAdapter.getSelectors((state: any) => state.messenger);

export const selectAllChats = (state) => selectAll(state);

export const { addMessage } = messengerSlice.actions;

export default messengerSlice.reducer;