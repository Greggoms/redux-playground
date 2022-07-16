import React from "react"
import { Link, navigate } from "gatsby"
import { useSelector, useDispatch } from "react-redux/es/exports"
import { selectUserAuth, logout } from "../app/features/userSlice"
import styled from "styled-components"

export default function Nav() {
  const dispatch = useDispatch()
  const userAuth = useSelector(selectUserAuth)

  return (
    <NavContainer>
      <div className="nav-content">
        <div className="main-links">
          <Link
            to="/"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Home
          </Link>
          <Link
            to="/app/profile"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Profile
          </Link>
          <Link
            to="/app/admin"
            activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
          >
            Admin
          </Link>
          {userAuth ? (
            <button
              onClick={() => {
                navigate(`/`)
                dispatch(logout())
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/app/login"
              activeStyle={{ color: "#f9f9f9", textDecoration: "underline" }}
            >
              Login
            </Link>
          )}
        </div>

        <a
          href="https://github.com/Greggoms/redux-playground"
          className="gitlink"
        >
          Github Repo
        </a>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  background: #333;
  padding: 20px !important;
  margin-bottom: 30px;

  .nav-content {
    display: flex;

    max-width: 500px;
    margin: 0 auto;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }

  .main-links {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 20px;
    flex: 1;
  }

  button {
    background: inherit;
    border: 1px solid ${props => props.theme.grayscale.light1};
    color: ${props => props.theme.grayscale.light1};
    padding: 5px;
    cursor: pointer;
  }
`
