import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  ul {
    display: flex;
    gap: 10px;
    list-style-type: none;
  }
`
