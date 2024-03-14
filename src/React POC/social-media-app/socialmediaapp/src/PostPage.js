import React from 'react'
import { Link, useParams } from 'react-router-dom'
const PostPage = ({posts,handleDelete}) => {
    const {id} =useParams();
    // console.log(id)
    const selectedPost = posts.find(item => (item.id.toString())===id);
  return (
    <main>
        {selectedPost? (
        <><p>{JSON.stringify(selectedPost)}</p>
        <button onClick={()=>handleDelete(selectedPost.id)}>Delete</button>
        <Link to={`/editpost/${selectedPost.id}`}><button >Edit</button></Link>
        </>
        ):null
        }   
     </main>
  )
}

export default PostPage