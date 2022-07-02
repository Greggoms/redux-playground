import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../app/features/userSlice"
import fetchUser from "../utils/fetchUser"
import styled from "styled-components"
import Nav from "./Nav"

export default function Layout({ children }) {
  const user = useSelector(selectUser)

  useEffect(() => {
    if (!user) {
      try {
        fetchUser()
      } catch (e) {
        console.error(e.message)
      }
    }
  }, [user])
  return (
    <LayoutContainer>
      <Nav />
      <main>{children}</main>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.article`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
