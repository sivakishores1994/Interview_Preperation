import React from 'react'

const Value2 = ({value2OnChange,valueBox2}) => {


  return (
        <input 
        type={'text'} 
        className={'valueBox2'} 
        onChange={value2OnChange}
        value={valueBox2}
        />
  )
}

export default Value2