import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main>
        <h1>404 not found</h1>
        <p>Please go to <Link to='/'>Home</Link> page</p>
    </main>
  )
}

export default Missing