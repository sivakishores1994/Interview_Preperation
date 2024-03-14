import React from 'react'

const SearchItem = ({handleSearch,searchValue}) => {
  return (
    <form>
      <label htmlFor='search'>Search Items</label>
      <input type={'text'} onChange={(e)=>handleSearch(e)} value={searchValue} />
    </form>
  )
}

export default SearchItem