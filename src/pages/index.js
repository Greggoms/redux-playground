import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ width: "fit-content", margin: "0 auto" }}>
      <h1>Redux Playground</h1>
      <h3>
        <Link to="/app/admin">State manipulation</Link>
      </h3>
    </div>
  )
}
