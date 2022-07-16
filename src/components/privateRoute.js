import React from "react"
import { navigate } from "@reach/router"
import { useSelector } from "react-redux/es/exports"
import { selectUserAuth } from "../app/features/userSlice"
import { toast } from "react-toastify"
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const currentUser = useSelector(selectUserAuth)

  if (!currentUser && location.pathname !== `/login`) {
    navigate("/app/login")
    return null
  }

  return !currentUser ? (
    // If we’re not logged in, redirect to the login page.
    navigate(`/app/login`)
  ) : (
    <Component {...rest} />
  )
}

export default PrivateRoute
