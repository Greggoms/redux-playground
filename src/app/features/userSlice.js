import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    // Pull the user info onto the UI
    setUser: (state, action) => {
      state.value = action.payload
    },
  },
  extraReducers: {
    "users/modifyUser": (state, action) => {
      console.log("[userSlice]:", action.payload)
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

// Selectors
export const selectUser = state => state.user.value

export default userSlice.reducer
