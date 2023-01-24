//Imports the main React component
import React from "react";
//Imports the components.
import Todo from "./Todo";

//The renderedList constant is an array that is constructed from the list array using the map method. Each list element is mapped to a Todo component with the corresponding props.
const List = ({ list, removeTodoListProp, editTodoListProp}) => {
    const renderedList = list.map(
        (item) => (
            <Todo
                title={item.title}
                completed={item.completed}
                deleted={item.deleted}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
                permanentDelete = {item.deleted} 
            />
        )
    );
    
    //Render the component in the DOM
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;