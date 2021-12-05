import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from '../features/user/userSlice'
import cartReducer from '../features/cart/cartSlice'

const reducer = {
  user: userReducer,
  cart: cartReducer,
}
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['user/setCurrentUser'],
      },
    }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
