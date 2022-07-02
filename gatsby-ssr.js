import React from "react"
import Layout from "./src/components/Layout"
import { Provider } from "react-redux"
import { store } from "./src/app/store"
import { createGlobalStyle } from "styled-components"

export const wrapRootElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </Provider>
  )
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone */
  /* lortschi answer */
  @supports (-webkit-overflow-scrolling: touch) {
    input,
    textarea {
      font-size: 16px;
    }
  }
`
