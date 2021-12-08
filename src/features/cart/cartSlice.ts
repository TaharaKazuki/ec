import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartState {
  displayParam: boolean
  cartItems: ICartItems
}

interface ICartItem {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity?: number
}

type ICartItems = ICartItem[]

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
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload)
    },
  },
})

const addItemToCart = (cartItems: ICartItems, cartItemToAdd: ICartItem) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity! + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const { toggleCartDisplay, addCartItem } = cartSlice.actions
export default cartSlice.reducer
