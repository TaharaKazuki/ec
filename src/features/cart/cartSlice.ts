import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartState {
  displayParam: boolean
  cartItems: string[]
}

const initialState = {
  displayParam: true,
  cartItems: [] as string[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.displayParam = !state.displayParam
    },
    addCartItem: (state, action: PayloadAction<string>) => {
      state.cartItems = [...state.cartItems, action.payload]
    },
  },
})

export const { toggleCartDisplay } = cartSlice.actions
export default cartSlice.reducer
