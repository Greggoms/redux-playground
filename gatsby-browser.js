import React from "react"
import Layout from "./src/components/Layout"
import { Provider } from "react-redux"
import { store } from "./src/app/store"
import { setUsers } from "./src/app/features/usersSlice"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/theme"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

export const wrapRootElement = ({ element, props }) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => store.dispatch(setUsers(json)))

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
      <ToastContainer newestOnTop={true} position="top-center" />
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
