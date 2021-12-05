import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentUser } from '../../typed/userTyped'

export interface IUserState {
  currentUser: ICurrentUser | null
}

const initialState: IUserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUserState>) => {
      state.currentUser = action.payload.currentUser
        ? { ...action.payload.currentUser }
        : null
    },
  },
})
export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
