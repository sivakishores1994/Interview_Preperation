import React from 'react'
const Value = ({valueBox1,hxaValue,textColor}) => {
console.log(hxaValue)
  return (
        <div>
          <section
      className={'valueBox1'}
      style={{
        backgroundColor: valueBox1
      }}>
      <p style={{color: textColor? '#FFF': '#000'}}>{valueBox1}</p>
      <p style={{color: textColor? '#FFF': '#000'}}>{hxaValue? hxaValue:''}</p>
      </section>
      </div>
  )
}

export default Value