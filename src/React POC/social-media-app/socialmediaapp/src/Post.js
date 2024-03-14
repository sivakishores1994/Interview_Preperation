import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({postItem}) => {
    // const {id} = useParams();
  return (
    <>
    {postItem?(
    <ul>
         <Link to={`post/${postItem.id}`}><li>{postItem.id},{postItem.title},{postItem.body}</li></Link> 
      </ul>
    ):
      <Link to="post/newpost">New Post</Link>
    }
    </>
    );

}

export default Post