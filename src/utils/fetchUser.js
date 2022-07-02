import { store } from "../app/store"
import { setUser } from "../app/features/userSlice"

export default async function fetchUser() {
  // This changes your user profile.
  // Requires browser refresh after saving.
  // Options are based on user.id  and are integers 1 through 10
  const userAuth = 2

  try {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        const user = json.find(user => user.id === userAuth)
        store.dispatch(setUser(user))
        console.log("Fetched Your Profile!", user)
      })
  } catch (e) {
    console.error("ERROR: ", e.message)
  }
}
