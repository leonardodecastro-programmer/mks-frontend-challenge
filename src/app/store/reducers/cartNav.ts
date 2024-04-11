import { createSlice } from '@reduxjs/toolkit'

const cartNavSlice = createSlice({
  name: 'cartNav',
  initialState: true,
  reducers: {
    ToggleVisible: (state) => !state
  }
})

export const { ToggleVisible } = cartNavSlice.actions
export default cartNavSlice.reducer
