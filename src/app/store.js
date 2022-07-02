import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./features/usersSlice"
import userReducer from "./features/userSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
  },
})
