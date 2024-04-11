import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@/app/types'

type CartState = {
  itens: Product[]
}

const initialState: CartState = {
  itens: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const eletronico = action.payload

      if (state.itens.find((eletronic) => eletronic.id === eletronico.id)) {
        alert('Product already added')
      } else {
        state.itens.push(eletronico)
      }
    },
    remove: (state, action: PayloadAction<Product>) => {
      const eletronico = action.payload

      if (state.itens.find((eletronic) => eletronic.id === eletronico.id)) {
        const itemRemove = state.itens.filter(
          (eletronic) => eletronic.id !== eletronico.id
        )
        state.itens = itemRemove
      } else {
        alert('Item already removed')
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
