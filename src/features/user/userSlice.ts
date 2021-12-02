import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentUser } from '../../App'

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
      if (action.payload.currentUser) {
        state.currentUser = {
          id: action.payload.currentUser.id,
          ...action.payload,
        }
      }
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer
