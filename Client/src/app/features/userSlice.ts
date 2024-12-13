import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { AddOnlineUser, RemoveOnlineUser } from '@/utils/onlineUserFunctions'

// Define a type for the slice state
export interface IOnlineUserState {
  onlineUsers: string[]
}

// Define the initial state using that type
const initialState: IOnlineUserState = {
  onlineUsers: [],
}

export const onlineUsersSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUser: (state, action: PayloadAction<string>) => {
      state.onlineUsers = AddOnlineUser(state.onlineUsers, action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.onlineUsers = RemoveOnlineUser(state.onlineUsers, action.payload);
    }
  },
})


// Other code such as selectors can use the imported `RootState` type
export const selectOnlineUsers = (state: RootState) => state.user.onlineUsers;
export const { addUser, removeUser } = onlineUsersSlice.actions;
export default onlineUsersSlice.reducer