import React from 'react'

const SearchItems = ({handleSearch,searchItems}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchItem'>Search Item</label>
        <input type={'text'} onChange={(e)=>handleSearch(e)} value={searchItems} />
    </form>
  )
}

export default SearchItems