import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/countSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})