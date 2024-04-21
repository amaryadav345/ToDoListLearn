import { useState } from "react";
import "./ToDoList.css";

const  ToDoList = () => {

  const [list,setList] =  useState([
    {id:1 , title:'item1'}
  ]);
  const [item,setItem] = useState('');
  

  const setItemValue = (event) =>{
    setItem(event.target.value);
    
}

const handleAddClick = (e) =>{    
    const newId=Math.random();
    let newList = [...list, {id:newId,title:item}];
    setList(newList);
    setItem('');
    
}
  return(
  <div className="buy-product">
    <h2 style = {{color : "Green"}}>To do list </h2>
    <div>
    <input type="text" placeholder="Enter your choice" value={item} onChange={setItemValue} ></input>
    <button className="submit-button " onClick={handleAddClick} >Add</button>
    </div>
    <ul>
        {
        list.map(item => {
            return (<li key={item.id}> {item.title}</li>);
        })
        }
    </ul>
  </div>      
  )       
}

export default ToDoList;