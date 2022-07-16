import { createSlice } from "@reduxjs/toolkit"

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    // Pull/Remove the users into the store
    setUsers: (state, action) => {
      state.value = action.payload
    },
    clearUsers: state => {
      state.value = []
    },
    // Remove user from the list
    deleteUser: (state, action) => {
      // eslint-disable-next-line
      state.value = state.value.filter(person => person.id != action.payload)
    },
    // Replace the user with a modified version
    modifyUser: (state, action) => {
      // 1) Locate the person I'm trying to edit
      const user = state.value.find(person => person.id === action.payload.id)

      // 2) Find the index of that person in the store/state.
      const index = state.value.indexOf(user)

      // 3) If there is a match, replace that array item with the new one.
      // https://stackoverflow.com/questions/5915789/how-to-replace-item-in-array
      // Eli answer
      if (index !== -1) {
        state.value[index] = action.payload
      }
      console.log(action.payload.name, "has been updated!")
    },
  },
  extraReducers: {
    "user/requestTimeOff": (state, action) => {
      const user = state.value.find(person => person.id === action.payload.id)
      const index = state.value.indexOf(user)
      if (index !== -1) {
        if (state.value[index].requests) {
          state.value[index].requests = [
            ...state.value[index].requests,
            action.payload.request,
          ]
        } else {
          state.value[index].requests = [action.payload.request]
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsers, clearUsers, deleteUser, modifyUser } =
  usersSlice.actions

// Selectors
export const selectUsers = state => state.users.value

export default usersSlice.reducer
