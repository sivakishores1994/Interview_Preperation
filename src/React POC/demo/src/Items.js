import React from 'react'
import ListItems from './ListItems'

const Items = ({items,handleCheckBox,handleDelete}) => {
 
  return (
        <ul>
        {
            items.map(item => (
                <ListItems 
                     item={item} 
                     key={item.id}
                     handleCheckBox={handleCheckBox} 
                     handleDelete={handleDelete} />
                 )
            )
        }
        </ul>  )
}

export default Items