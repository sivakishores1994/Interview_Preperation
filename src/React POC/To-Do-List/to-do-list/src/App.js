import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import Footer from "./Footer";
import Header from "./Header";
import ListItems from "./ListItems";
import SearchItem from "./SearchItem";
import axios from 'axios';
import ListPosts from "./ListPosts";
function App() {

  const [items,setItems]=useState([
    {
      id:1,
      item:'React',
      checked:true
    },
    {
      id:2,
      item:'Angular',
      checked:true
    },
    {
      id:3,
      item:'JS',
      checked:false
    }
  ]);
  const [posts,setPosts]=useState([]);
  const [addInput,setAddInput]= useState('');
  const [searchValue,setSearchValue]= useState('');
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage]= useState(5);

  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
 
  console.log(indexOfLastPost, indexOfFirstPost)
const pageCount = Math.ceil(items.length/2);
console.log(pageCount);
const slicePosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  useEffect(()=>{
    const fetchPosts = async() => {
      const getPosts=await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(getPosts.data)
      const response = getPosts.data;
      setPosts(response)
    }
    fetchPosts()
  },[])

  const handleAddItem = (e) =>{
      setAddInput(e.target.value);
  }
  const handleAddItemSubmit=()=>{
    if(addInput){
    const id = items.length? items.length+1 : 0;
    const addNewItem = {id,item:addInput,checked:false};
    setItems([...items,addNewItem]);
      setAddInput('')
  }
}
  const handleSearch=(e)=>{
      setSearchValue(e.target.value)
  }
  const handleCheckbox=(id)=>{
    const checkedValue = items.map(item => (item.id===id)? {...item,checked:!item.checked}: item);
    setItems(checkedValue)
  }
  const handleDelete=(id)=>{
    const deleteItem= items.filter(item => item.id!=id);
    setItems(deleteItem);
  }

  const handlePagination = (Pagination) =>{
    setCurrentPage(Pagination) 
  }
  
  return (
    <div className="App">
    <Header title={"To DO List"}/>
    <div className="container">
     <AddItem 
        handleAddItem={handleAddItem}
        addInput={addInput}
        handleAddItemSubmit={handleAddItemSubmit}
     />
     <SearchItem handleSearch={handleSearch} searchValue={searchValue} />
     <ListItems 
        items={items.slice(0,pageCount).filter((item) => item.item.toLocaleLowerCase().includes(searchValue))}
        handleCheckbox={handleCheckbox}
        handleDelete={handleDelete}
        pageCount={pageCount}
        />
      <ListPosts totalposts={posts} posts={slicePosts} postPerPage={postPerPage} handlePagination={handlePagination}/>
    </div>
         <Footer title={"@Copyrights ListApp 2024"}/>
         </div>
  );
}

export default App;
