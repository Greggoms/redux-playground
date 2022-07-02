import { store } from "../app/store"
import { setUser } from "../app/features/userSlice"

export default async function fetchUser() {
  const userAuth = 2
  try {
    console.log("Fetching Resource...")
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        const user = json.find(user => user.id === userAuth)
        store.dispatch(setUser(user))
      })
  } catch (e) {
    console.error("ERROR: ", e.message)
  }
}
