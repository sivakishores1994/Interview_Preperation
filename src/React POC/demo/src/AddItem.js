import React, { useRef } from 'react'
import { IoMdAdd } from "react-icons/io";

const AddItem = ({addItem,handleInput,handleSubmit}) => {

  const inputFocus = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input 
            autoFocus
            ref={inputFocus}
            type={'text'}
            placeholder="Add Item"
            onChange={(e)=>handleInput(e)}
            value={addItem}
            />
            <button onClick={(e)=> {
              handleSubmit(e);
              inputFocus.current.focus();
            }
              }>
            <IoMdAdd />
            </button>
      </form>  )
}

export default AddItem