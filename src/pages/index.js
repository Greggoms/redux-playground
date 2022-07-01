import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Redux Playground</h1>
      <h3>
        <Link to="/users">State manipulation</Link>
      </h3>
    </div>
  )
}
