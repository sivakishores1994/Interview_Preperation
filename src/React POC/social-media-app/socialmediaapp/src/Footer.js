import React from 'react'

const Footer = ({title}) => {
  return (
    <footer>
        <h1>{title}</h1> 
    </footer>  )
}
Footer.defaultProps={
    title:"Sivakishore App"
}

export default Footer