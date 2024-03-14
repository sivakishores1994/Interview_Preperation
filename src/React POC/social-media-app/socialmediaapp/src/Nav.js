import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({handleSearch,searchValue}) => {
  return (
  <nav className='nav'>
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Search Posts</label>
        <input 
        placeholder='search posts'
        type={'text'} 
        onChange={(e)=>handleSearch(e)}
        value={searchValue}
        />
    </form>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/post">Post</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
  </nav>
  )
}

export default Nav