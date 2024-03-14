import React, { useContext } from 'react'
import DataContext from './context/DataContext'
const NewPost = ({postTitle,postContent,handleSubmit,handlePostContent}) => {

    const {handlePostTitle} = useContext(DataContext);
    console.log(handlePostTitle)
  return (
    <main>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label>Title</label>
            <input 
            type={'text'} 
            id={'postTitle'}
            onChange={handlePostTitle}
            value={postTitle}
            />
            <input 
            type={'text'} 
            id={'postContent'}
            onChange={handlePostContent}
            value={postContent}
            />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </main>
  )
}

export default NewPost