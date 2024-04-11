import { combineReducers, configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import cartNavReducer from './reducers/cartNav'

const rootReducer = combineReducers({
  cart: cartReducer,
  cartNav: cartNavReducer
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
