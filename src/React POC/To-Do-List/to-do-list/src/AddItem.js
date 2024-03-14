import React from 'react'

const AddItem = ({addInput,handleAddItem,handleAddItemSubmit}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="Add Item">Add Item</label>
        <input type={'text'} onChange={(e)=>handleAddItem(e)} value={addInput} required/>
        <button type='submit' onClick={handleAddItemSubmit}>Add Item</button>
    </form>
  )
}

export default AddItem