import React from 'react'

const Footer = ({title}) => {
  return (
        <footer>
            <h2>{title}</h2>
        </footer>
    )
}
Footer.defaultProps={
    title:'@Copyright 2024'
}
export default Footer