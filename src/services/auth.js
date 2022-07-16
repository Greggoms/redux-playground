import { store } from "../app/store"
import { login, setUserDoc } from "../app/features/userSlice"
import { navigate } from "gatsby"

const handleLogin = async (e, { id, password }) => {
  e.preventDefault()

  try {
    const currentUser = store
      .getState()
      // == because returned id is somehow not an int
      // eslint-disable-next-line
      .users.value.find(person => person.id == id)

    if (password === `pass`) {
      store.dispatch(login(currentUser))
      store.dispatch(setUserDoc(currentUser))
      console.log("Fetched Your Profile!", currentUser)
      navigate(`/app/profile`)
    }
  } catch (e) {
    console.error("ERROR: ", e.message)
    navigate(`/app/login`)
  }
  return false
}

export default handleLogin
