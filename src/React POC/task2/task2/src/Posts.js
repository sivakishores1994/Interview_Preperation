import React from 'react'

export const Posts = ({postList,postHandleClick}) => {
  return (
    <>
    <button onClick={postHandleClick}>Posts</button>
    {postList?
    <ul>
        {postList.map(item => (
        <li key={item.id}>
            {JSON.stringify(item)}
        </li>
        )
        )}
    </ul>:null}
    </>
  )
}

export default Posts