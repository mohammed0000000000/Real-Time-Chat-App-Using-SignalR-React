import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { AddOnlineUser, RemoveOnlineUser } from '@/utils/onlineUserFunctions'

// Define a type for the slice state
interface CounterState {
  onlineUser: string[]
}

// Define the initial state using that type
const initialState: CounterState = {
  onlineUser: [],
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUser: (state, action: PayloadAction<string>) => {
      state.onlineUser = AddOnlineUser(state.onlineUser, action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.onlineUser = RemoveOnlineUser(state.onlineUser, action.payload);
    }
  },
})

export const { addUser, removeUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default userSlice.reducer