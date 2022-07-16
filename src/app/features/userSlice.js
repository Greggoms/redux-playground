import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: { userAuth: null, fakeDoc: null },
  reducers: {
    login: (state, action) => {
      state.userAuth = action.payload
    },
    logout: state => {
      state.userAuth = null
      state.fakeDoc = null
    },
    setUserDoc: (state, action) => {
      state.fakeDoc = action.payload
    },
    requestTimeOff: (state, action) => {
      if (state.fakeDoc.requests) {
        state.fakeDoc.requests = [
          ...state.fakeDoc.requests,
          action.payload.request,
        ]
      } else {
        state.fakeDoc = { ...state.fakeDoc, requests: [action.payload.request] }
      }
    },
  },

  // https://stackoverflow.com/questions/67577835/same-action-triggering-in-multiple-slices-redux-toolkit
  // slideshowp2 answer
  // This allows for 1 action (modifyUser) to update
  // 2 slice state values (this user.value & usersSlice's users.value)
  extraReducers: {
    "users/modifyUser": (state, action) => {
      if (action.payload.id === state.value.id) {
        state.value = action.payload
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, setUserDoc, requestTimeOff } = userSlice.actions

// Selectors
export const selectUserAuth = state => state.user.userAuth
export const selectUserDoc = state => state.user.fakeDoc

export default userSlice.reducer
