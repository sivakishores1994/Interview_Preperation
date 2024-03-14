import React from 'react'

const Header = (props) => {
  return (
    <header>{props.title}</header>
  )
}
Header.defaultProps={
    title: 'To Do List'
}
export default Header