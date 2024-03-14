import React from 'react'
import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
    {posts.map(item => (
        <Post postItem={item}/>
    ))}
    </>
    
  )
}

export default Feed