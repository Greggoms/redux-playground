import { store } from "../app/store"
import { setUsers } from "../app/features/usersSlice"

export const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    store.dispatch(setUsers(res.json()))
  } catch (e) {
    console.error("ERROR: ", e.message)
  }
}
