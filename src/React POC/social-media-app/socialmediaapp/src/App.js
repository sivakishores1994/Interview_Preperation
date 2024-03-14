import React, { useEffect, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import {Routers,Route,Link, Routes, useNavigate} from "react-router-dom";
import Post from "./Post";
import PageLayout from "./PageLayout";
import Feed from "./Feed";
import api from "./apiRequest";
import EditPost from "./EditPost";
import DataProvider from './context/DataContext'

function App() {

  const [posts,setPosts]=useState([])
  const [searchValue,setSearchValue] = useState('');
  const [postTitle,setPostTitle] = useState('');
  const [postContent,setPostContent]= useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchPosts = async () => {
      try {
        const reponse =await api.get('/posts');
        setPosts(reponse.data)
      } catch (error) {
        return error.message;
      }
     
    }
    fetchPosts()
  },[posts])
 
  const handlePostContent = (e) => {
    setPostContent(e.target.value);
  }
  const handleSubmit = async () =>{
       const postId = posts.length?posts[posts.length-1].id+1:1
       const newPost={id: postId,title:postTitle,body:postContent};
       try {
        const addNewPost = await api.post('/posts',newPost);
        const allPosts = [...posts, addNewPost.data]
        setPosts(allPosts);
        setPostTitle('');
        setPostContent('');
        navigate('/');
       } catch (error) {
        return error.Message
       }
      
  }
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleDelete = async (id) => {
    try {
      console.log('id',id);
      const deletePost= posts.filter(post => post.id===id);
      await api.delete(`posts/${id}`,deletePost);
      const remainingPosts = posts.filter(post => post.id!==id);
      console.log(remainingPosts)
      setPosts(remainingPosts);
      navigate('/')
    } catch (error) {
      return error.message
    }
   
  }
  return (
    <div className="App">
          <Header title="Practice"/>
     
     <Nav 
     handleSearch={handleSearch}
     searchValue={searchValue}
     />
     <Routes>
      <Route path="/" element={ <Home 
          posts={posts}
          searchValue={searchValue}
     />} />
    <DataProvider>
    <Route path="post">
    <Route index element={<NewPost 
     handlePostTitle={handlePostTitle}
     handlePostContent={handlePostContent}
     postTitle={postTitle}
     postContent={postContent}
     handleSubmit={handleSubmit} />} />
     {/* <Route path="newpost" /> */}
    <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />}/>
    </Route>
    </DataProvider>
    <Route path="/editpost/:id" element={<EditPost />} />
     <Route path="/about" element={<About />} />
     <Route path="*" element={<Missing />} />
     </Routes>
      <Footer title="Social Media App"/>

     {/* <PostPage /> */}
     {/* <About />
     <Missing />
     <Footer /> */}

{/* <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/postpage" element={<PageLayout />}>
            <Route index element={<PostPage />}></Route>
            <Route path=":id" element={<Post />}></Route>
            <Route path="newpost" element={<NewPost />}></Route>
          </Route>
         
          <Route path="*" element={<Missing />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
