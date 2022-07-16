import React, { useState } from "react"
import handleLogin from "../services/auth"
import { useSelector } from "react-redux"
import { selectUsers } from "../app/features/usersSlice"
import styled from "styled-components"

const Login = () => {
  const users = useSelector(selectUsers)
  const [userId, setUserId] = useState(0)
  const [password, setPassword] = useState(``)

  return (
    <LoginContainer>
      <form>
        <h1>Log in</h1>
        <label>
          User ID
          <input
            type="number"
            name="userId"
            placeholder="[1-10]"
            onChange={e => setUserId(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="pass"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Log In"
          onClick={e => handleLogin(e, { id: userId, password: password })}
        />
      </form>
      <section className="options">
        <h2>Users 1-5 are Admins</h2>
        <ul>
          {users.map(person => (
            <li key={person.id}>
              <h4>{person.name}</h4>
              <p>Role: {person.id <= 5 ? `Admin` : `Default`}</p>
              <p>User ID: {person.id}</p>
              <p>Password: pass</p>
            </li>
          ))}
        </ul>
      </section>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.section`
  /* width: fit-content;
  margin: 0 auto; */

  h1 {
    font-size: 20pt;
    font-weight: 200;
  }

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 9pt;
    color: ${props => props.theme.grayscale.light3};
  }

  input {
    min-width: 100px;
    max-width: fit-content;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
    margin: 0 auto;
  }

  .options {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;

    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-items: center;
      gap: 30px;

      list-style-type: none;
    }

    li {
      min-width: 200px;
    }
  }
`
