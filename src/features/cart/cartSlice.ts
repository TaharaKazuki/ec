import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartState {
  displayParam: boolean
  cartItems: ICartItems
}

type ICartItems = {
  name: string
  price: number
  imageUrl: string
}[]

const initialState = {
  displayParam: true,
  cartItems: [] as ICartItems,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.displayParam = !state.displayParam
    },
    addCartItem: (state, action: PayloadAction<ICartItems>) => {
      state.cartItems = [...state.cartItems, ...action.payload]
    },
  },
})

export const { toggleCartDisplay, addCartItem } = cartSlice.actions
export default cartSlice.reducer
