import React from "react";
const Todolist = (props) =>{
    
    return(
        <div className="todo_style">
            
            <li>{props.text}<button 
                className="remove"
                onClick={()=>{props.onSelect(props.id)}}>
                X</button>
            </li>
        </div>
     
    ) 
}
export default Todolist;