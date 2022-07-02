import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import EditUserForm from "../components/forms/EditUserForm"
import styled from "styled-components"
import { deleteUser, selectUsers } from "../app/features/usersSlice"
import { selectUser } from "../app/features/userSlice"
import fetchUsers from "../utils/fetchUsers"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const currentUser = useSelector(selectUser)
  const [editing, setEditing] = useState(false)
  const [userId, setUserId] = useState("")

  useEffect(() => {
    if (users.length === 0) {
      fetchUsers()
    }
  }, [users])

  const handleSetEditing = id => {
    setEditing(!editing)
    setUserId(id)
  }

  return (
    <UsersContainer>
      <ul>
        {users.length !== 0 ? (
          users.map(user => (
            <li
              key={user.id}
              className={
                currentUser && currentUser.id === user.id ? "currentUser" : ""
              }
            >
              <div className="buttons">
                <button
                  onClick={() => handleSetEditing(user.id)}
                  className="button-modify"
                >
                  {editing
                    ? "Cancel"
                    : currentUser && currentUser.id === user.id
                    ? "Modify Yourself"
                    : `Modify ${user.name.split(" ")[0]}`}
                </button>
                <button
                  // disabled
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="button-delete"
                >
                  Delete
                </button>
              </div>
              <div className="info-general">
                <h2>
                  {user.name}{" "}
                  {currentUser && currentUser.id === user.id && "(You)"}
                </h2>
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
  margin: 30px auto;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
    list-style-type: none;
  }

  .currentUser {
    box-shadow: 10px 10px 10px #777;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    background: #333;
    padding: 5px;

    button {
      padding: 2px;
    }

    button:disabled {
      color: #999;
      cursor: not-allowed;
    }

    .button-modify {
      cursor: pointer;
      border: 2px solid lightblue;
      background: #f9f9f9;
    }

    .button-delete {
      cursor: pointer;
      background: inherit;
      color: #f9f9f9;
      border: none;
      text-decoration: underline;
    }
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
