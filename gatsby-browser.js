import React from "react"
import Layout from "./src/components/Layout"
import { Provider } from "react-redux"
import { store } from "./src/app/store"

export const wrapRootElement = ({ element, props }) => {
  return (
    <Provider store={store}>
      <Layout {...props}>{element}</Layout>
    </Provider>
  )
}
