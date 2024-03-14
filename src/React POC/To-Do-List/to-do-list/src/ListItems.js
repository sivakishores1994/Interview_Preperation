import React from 'react'

const ListItems = ({items,handleCheckbox,handleDelete,pageCount}) => {
  return (
    <div>
        {items? (
        <ul>
            {
            items.map((item)=>(
            <li key={item.id}>
                <input type={'checkbox'} checked={item.checked} onChange={()=>handleCheckbox(item.id)} />
                {item.item}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
            ))}
        </ul>
        )
        :<p>No Lists</p>
        }
        <button></button>
        <p>{pageCount-1}</p>
    </div>
  )
}

export default ListItems