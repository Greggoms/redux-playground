import { store } from "../app/store"
import { setUsers } from "../app/features/usersSlice"

export default async function fetchUsers() {
  try {
    console.log("Fetching Resource...")
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => store.dispatch(setUsers(json)))
  } catch (e) {
    console.error("ERROR: ", e.message)
  }
}
