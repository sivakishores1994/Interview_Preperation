import Header from './Header';
import Footer from './Footer';
import { Content } from './Content';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItems from './SearchItems';
import React from 'react';
import apiRequest from './ApiRequest';

function App() {
  const API_URL = 'http://localhost:3333/items';
  const [items,setItems] = useState([])
  const [fetchError,setFetchError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
useEffect(()=>{
  const fetchItems = async () =>{
    try {
      const response = await fetch(API_URL);
      if(!response.ok) throw 'Data Not Received';
      const listItems = await response.json()
      setItems(listItems);
    } catch (error) {
      setFetchError(error.Message);
    }
    finally{
      setIsLoading(false)
    }
  }
  setTimeout(()=>{
    setIsLoading(false)
    fetchItems();
  },2000);
  
},[])

const handleCheckBox = (id) => {
    const listItems = items.map((item) => item.id===id? {...item, checked:!item.checked} : item);
    setItems(listItems);
    const checkedItems = listItems.filter(item => item.id===id);
    const UpdateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: checkedItems[0].checked})
    }
    const patchUrl= `${API_URL}/${id}`
    const result = apiRequest(patchUrl,UpdateOptions);
    if(result) setFetchError(result)
}
const handleDelete = (id) =>{
    const remainingItems = items.filter((item)=> item.id!==id)
    setItems(remainingItems);
    const deleteItems = remainingItems.filter(item => item.id===id);

    const deleteOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteItems)
    }
    const deleteUrl = `${API_URL}/${id}`
    const result = apiRequest(deleteUrl,deleteOptions);
    if(result) setFetchError(result)
}

const [addItem,setAddItem] = useState('');

const addItems = () =>{
  const addNewItem = {id : items.length? items[items.length-1].id+1 : 0, checked: false, item: addItem};
  setItems([...items,addNewItem]);
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewItem)
  }
  const result = apiRequest(API_URL,postOptions);
  if(result) setFetchError(result);
}

const handleInput = (e) =>{
  setAddItem(e.target.value);
}
const handleSubmit = (e) => {
e.preventDefault();
addItems();
// setItems([...items,{id:items.length+1,checked:true,item:addItem}])
setAddItem('')
}

const [searchItems,setSearchItems]=useState('');

const handleSearch = (e)=> {
  setSearchItems(e.target.value);
}

const dataFromChild= (data) => {
  console.log(data);
}
  return (
    <div >
      <Header title="Sivakishore" />
      <AddItem
        addItem={addItem}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <SearchItems 
        handleSearch={handleSearch}
        searchItems={searchItems}
      />
      <main>
        {isLoading && <p>Loading...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError &&
      <Content items={items.filter(item => (item.item.toLocaleLowerCase()).includes(searchItems.toLocaleLowerCase()))} handleCheckBox={handleCheckBox} handleDelete={handleDelete} 
      />
        }
      </main>
      <Footer set={dataFromChild} length={items.length? items.length:0}/>
    </div>
  );
}

export default App;
