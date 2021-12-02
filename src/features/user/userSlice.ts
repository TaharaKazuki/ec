import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface IUserState {
  currentUser: string | null
}

const initialState: IUserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string | null>) => {
      state.currentUser = action.payload
    },
  },
})

export const selectUser = (state: RootState) => state.user.currentUser
export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
