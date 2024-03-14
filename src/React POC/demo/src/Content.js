import React from 'react'
import Items from './Items';

export const Content = ({items,handleCheckBox,handleDelete}) => {
  return (
    <main>
        { items.length>0 ?(
            <Items items={items} handleCheckBox={handleCheckBox} handleDelete={handleDelete} />
           )
        :( 
        <p>List Is Empty</p>)
        }
    </main>
  )
}
