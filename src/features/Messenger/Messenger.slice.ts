import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessengerState {
  chats: any[],
}

const initialState: MessengerState = {
  chats: [],
}

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {

  }
})

export default messengerSlice.reducer;