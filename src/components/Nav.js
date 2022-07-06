import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link
            to="/"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/admin"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Admin
          </Link>
        </li>
      </ul>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  background: #333;
  padding: 20px !important;
  margin-bottom: 30px;

  ul {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 50px;

    list-style-type: none;
  }

  li {
    a {
      color: #ccc;
      text-decoration: none;
    }
  }
`
