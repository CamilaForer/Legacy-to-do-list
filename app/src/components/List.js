import React from "react";
import Todo from "./Todo";

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
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;