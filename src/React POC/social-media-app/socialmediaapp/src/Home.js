import React from 'react'
import Feed from './Feed'

const Home = ({posts,searchValue}) => {
  return (
    <main>
        {posts.length?(
            <Feed posts={
                posts.filter(item=> item.title.toLowerCase().includes(searchValue))||
                posts.filter(item => item.body.toLowerCase().includes(searchValue)) 
            } searchValue={searchValue}/>) :
            <p>No dadas to display</p>
        }
    </main>
  )
}

export default Home