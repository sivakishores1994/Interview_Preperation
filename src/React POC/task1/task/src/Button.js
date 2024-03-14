import React from 'react'

const Button = ({handleClick,textColor}) => {

console.log(textColor)
  return (
        <button className='valueButton' 
        onClick={handleClick}
        value={textColor}
        >Toggle Color change</button>
  )
}

export default Button