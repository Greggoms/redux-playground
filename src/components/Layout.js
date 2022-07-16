import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import styled from "styled-components"
import Nav from "./Nav"
import { useSelector } from "react-redux/es/exports"
import { selectUsers } from "../app/features/usersSlice"
import { fetchUsers } from "../services/fetchUsers"

export default function Layout({ children }) {
  const users = useSelector(selectUsers)

  if (!users) {
    try {
      fetchUsers()
    } catch (e) {
      console.error(e.message)
    }
  }
  return (
    <HelmetProvider>
      <LayoutContainer>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:200,400,700&display=swap"
          />
        </Helmet>
        <Nav />
        <main>{children}</main>
      </LayoutContainer>
    </HelmetProvider>
  )
}

const LayoutContainer = styled.article`
  font-family: "Open Sans", sans-serif;
`
