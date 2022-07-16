import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { Link } from "gatsby"
import { deleteUser, selectUsers } from "../../app/features/usersSlice"
import { selectUserAuth } from "../../app/features/userSlice"
import EditUserForm from "./EditUserForm"

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)
  const currentUser = useSelector(selectUserAuth)
  const [editing, setEditing] = useState(false)
  const [userId, setUserId] = useState("")

  const handleSetEditing = id => {
    setEditing(!editing)
    setUserId(id)
  }

  return (
    <UsersContainer>
      <ul>
        {users.length !== 0 ? (
          users.map(user => (
            <div className="grid" key={user.id}>
              {user.requests && <div className="dot">!</div>}
              <li
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
                  <Link to={`/app/admin/users/${user.id}`}>
                    <h2>
                      {user.name}{" "}
                      {currentUser && currentUser.id === user.id && "(You)"}
                    </h2>
                  </Link>
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
            </div>
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
  margin: 0 2vw;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 50px;
    list-style-type: none;
  }

  li {
    grid-column: 1;
    grid-row: 1;

    height: fit-content;
  }

  .dot {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    position: relative;
    top: -10px;
    left: -10px;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgb(110, 222, 98);
    text-align: center;
    font-size: 20pt;
  }

  .currentUser {
    box-shadow: 10px 10px 10px #777;
  }

  .grid {
    display: grid;
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
