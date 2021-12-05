import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartState {
  displayParam: boolean
}

const initialState = {
  displayParam: true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDisplay: (state, action: PayloadAction<ICartState>) => {
      state.displayParam = !action.payload.displayParam
    },
  },
})

export const { toggleCartDisplay } = cartSlice.actions
export default cartSlice.reducer
