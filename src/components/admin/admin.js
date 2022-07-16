import React from "react"
import { useSelector } from "react-redux"
import { selectUserAuth } from "../../app/features/userSlice"
import { navigate } from "@reach/router"
import { toast } from "react-toastify"
import UserList from "./UserList"

const AdminPage = () => {
  const userAuth = useSelector(selectUserAuth)

  if (userAuth.id > 5) {
    toast.info(`Access Denied`, { autoClose: 1000 })
    navigate(`/app/profile`)
  } else {
    return (
      <div>
        <UserList />
      </div>
    )
  }
}

export default AdminPage
