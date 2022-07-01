import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import EditUserForm from "../components/forms/EditUserForm"
import styled from "styled-components"
import { deleteUser, selectUsers } from "../app/features/usersSlice"
import fetchUsers from "../utils/fetchUsers"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const [editing, setEditing] = useState(false)
  const [userId, setUserId] = useState("")

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers()
    }
    console.log(users)
  }, [users])

  const handleSetEditing = id => {
    setEditing(!editing)
    setUserId(id)
  }

  return (
    <UsersContainer editing={editing}>
      <ul>
        {users.length !== 0 ? (
          users.map(user => (
            <li key={user.id}>
              <div className="buttons">
                <button onClick={() => handleSetEditing(user.id)}>
                  {editing ? "Cancel" : "Edit"}
                </button>
                <button onClick={() => dispatch(deleteUser(user.id))}>
                  Delete
                </button>
              </div>
              <div className="info-general">
                <h2>{user.name}</h2>
                <p>ID: {user.id}</p>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
              </div>
              <div className="info-location">
                <h3>Address:</h3>
                <p>street: {user.address.street}</p>
                <p>suite: {user.address.suite}</p>
                <p>city: {user.address.city}</p>
                <p>zipcode: {user.address.zipcode}</p>
                <div>
                  <h3>Geo:</h3>
                  <p>lat: {user.address.geo.lat}</p>
                  <p>lng: {user.address.geo.lng}</p>
                </div>
              </div>
              <div className="info-company">
                <h3>Company:</h3>
                <p>name: {user.company.name}</p>
                <p>catchphrase: {user.company.catchphrase}</p>
                <p>bs: {user.company.bs}</p>
              </div>
            </li>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </ul>
      {editing && (
        <EditUserForm
          handleEditFunction={handleSetEditing}
          editing={editing}
          id={userId}
        />
      )}
    </UsersContainer>
  )
}

const UsersContainer = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
    list-style-type: none;
  }

  .info {
    &-general,
    &-location,
    &-company {
      padding: 15px;
    }
    &-general {
      background: lightblue;
    }
    &-location {
      background: lightsalmon;
    }
    &-company {
      background: lightseagreen;
    }
  }
`
