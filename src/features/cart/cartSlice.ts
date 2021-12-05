import { createSlice } from '@reduxjs/toolkit'

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
    toggleCartDisplay: (state) => {
      state.displayParam = !state.displayParam
    },
  },
})

export const { toggleCartDisplay } = cartSlice.actions
export default cartSlice.reducer
