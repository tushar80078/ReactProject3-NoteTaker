import { configureStore } from '@reduxjs/toolkit'
import noteSlicer from '../slices/noteSlicer'
export const store = configureStore({
  reducer: {
    noteSlicer:noteSlicer
  },
})