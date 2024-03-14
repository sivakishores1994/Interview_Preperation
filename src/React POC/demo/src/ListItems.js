import React from 'react'
import { MdDelete } from "react-icons/md";

const ListItems = ({item,handleCheckBox,handleDelete}) => {
  return (
    <li className='item'>
    <input type={'checkbox'} checked={item.checked} onChange={() => handleCheckBox(item.id)} />
    <label style={(item.checked)? {textDecoration : "line-through"}: null} onDoubleClick={ ()=> handleCheckBox(item.id) }>{item.item}</label>
    <MdDelete role={'button'}
    tabIndex={0}
    onClick={() => handleDelete(item.id)}
    aria-label={`Delete ${item.item}`}
    />
</li>  )
}

export default ListItems