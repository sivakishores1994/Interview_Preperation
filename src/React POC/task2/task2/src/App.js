import './App.css';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import { useEffect, useState } from 'react';

function App() {

const API_URL = 'https://jsonplaceholder.typicode.com/';
const [userList,setUserList] = useState([]);
const [postList,setPostList] = useState([]);

// const [fetchError,setFetchError]=useState('');

useEffect(()=>{
  
  const fetchItems = async () =>{
    // const objectOptions = {
  //   method: 'GET',
  //   // 'Content-Type': 'application/json',
  // }
    try {
      const response=await fetch(`${API_URL}/${'users'}`);
      const result=await response.json();
      // const res= result.map((item => console.log(item)))
      setUserList(result);
      // console.log(await response.json())
    } catch (error) {
      console.log(error.Message)
    }
  }
  fetchItems()
},[])
const userHandleClick = async() =>{
  try {
    const response=await fetch(`${API_URL}/${'users'}`);
    const result=await response.json();
    // const res= result.map((item => console.log(item)))
    setUserList(result);
    setPostList(null)
    // console.log(await response.json())
  } catch (error) {
    console.log(error.Message)
  }
}
const postHandleClick = async() =>{
  try {
    const response=await fetch(`${API_URL}/${'posts'}`);
    const result=await response.json();
    // const res= result.map((item => console.log(item)))
    setPostList(result);
    setUserList(null);
    // console.log(await response.json())
  } catch (error) {
    console.log(error.Message)
  }
}
  return (
    <>
    <Users 
    userHandleClick={userHandleClick}
    userList={userList}
    />
    <Posts 
    postHandleClick={postHandleClick}
    postList={postList}
    />
    <Comments />
    </>
  );
}

export default App;
