import React from "react"
import styled from "styled-components"
import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Nav />
      <main>{children}</main>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.article``
