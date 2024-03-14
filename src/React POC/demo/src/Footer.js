import React from 'react'

const Footer = (props) => {
  props.set('hello')
  return (
    <footer>{props.length? (props.length>1? 'To DO Lists': 'To DO List'): 'No Items'}</footer>
  )
}

export default Footer