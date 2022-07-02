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

  // https://stackoverflow.com/questions/67577835/same-action-triggering-in-multiple-slices-redux-toolkit
  // slideshowp2 answer
  // This allows for 1 action (modifyUser) to update
  // 2 slice state values (this user.value & usersSlice's users.value)
  extraReducers: {
    "users/modifyUser": (state, action) => {
      // eslint-disable-next-line
      if (action.payload.id == state.value.id) {
        state.value = action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

// Selectors
export const selectUser = state => state.user.value

export default userSlice.reducer
