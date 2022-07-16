import React from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectUsers } from "../../app/features/usersSlice"
import styled from "styled-components"

const UserDetails = props => {
  const users = useSelector(selectUsers)
  // == because returned id is somehow not an int
  // eslint-disable-next-line
  const user = users.find(user => props.params["*"] == user.id)

  if (user) {
    return (
      <UserDetailsContainer>
        <h2>{user.name}'s Page</h2>
        {user.requests ? (
          <>
            <h3>Requests</h3>
            <ul>
              {user.requests.map((request, index) => (
                <li key={index}>
                  <p>
                    {request.begin} to {request.end} using {request.hours}{" "}
                    hours.
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No Requests</p>
        )}
      </UserDetailsContainer>
    )
  } else {
    return <p>Something went wrong...</p>
  }
}

export default UserDetails

const UserDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`
