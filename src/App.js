import React, { useState } from 'react';
import Todolist from './Todolist';
import './App.css';

function App() {
  const [inputList,setInputList] =useState("");
  const [items,setItems] =useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputList("");
  }


  const deleteItem = (id)=>{
    console.log("deleted")
    setItems((oldItems)=>{
      return oldItems.filter((arElement ,index)=>{
        return index!==id;
      })
    })
  }


  return (
    <div className="App">
     <div className="main_div">
      <div className="center_div">
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder='    Add items' 
        value={inputList} onChange={itemEvent}/>
        <button  className="add" onClick={listOfItems}>+</button>
        <ol>
         
         { items.map((itemVal ,index) =>{
            return <Todolist key={index}
            id={index}
            text={itemVal}
            onSelect ={deleteItem}
            />
          })}
        </ol>
      </div>
     </div>
    </div>
  );
}

export default App;
