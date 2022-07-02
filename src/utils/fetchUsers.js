import { store } from "../app/store"
import { setUsers } from "../app/features/usersSlice"

export default async function fetchUsers() {
  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        store.dispatch(setUsers(json))
        console.log("Fetched Users List!", json)
      })
  } catch (e) {
    console.error("ERROR: ", e.message)
  }
}
