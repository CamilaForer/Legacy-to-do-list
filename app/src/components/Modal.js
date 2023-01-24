//Imports the components.
import List from "./List";
import todos from "../apis";
//Imports the main React component and the useState state and useEffect hook.
import { useState, useEffect } from "react";

//Definition of the Modal component 
const Modal = () => {
    const [todoList, setTodoList] = useState([]);
    const [listDeleted, setListDeleted] = useState(false);


    useEffect(() => { 
        async function fetchData() { 
            const { data } = await todos.get("/todos"); 
            const filteredData = data.filter(todo => todo.completed === true ); 
            const filteredDatadeleted = data.filter(todo => todo.deleted === true); 
            setTodoList(listDeleted? filteredDatadeleted: filteredData); } 
    fetchData(); }); 

    // this function is making a DELETE request to remove an item from the task list and then updating the application state to reflect the item's removal.
    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    //The editTodo function is used to edit a task list item.
    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    //Render the component in the DOM
    return (
        <>
            {/* Button trigger modal */}
            <button type="button"className="btn-modal" data-toggle="modal" data-target="#exampleModal">
                <i className="folder open icon iconfold"></i>
                {/* BsFillCollectionFill */}
                {/* AiFillFolderOpen */}
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn-filter" onClick={()=>{setListDeleted(true)}}>Eliminadas</button>
                            <button className="btn-filter" onClick={()=>{setListDeleted(false)}}>Realizadas</button>
                            <button type="button" className="close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i className="black remove icon"></i>
                                </span>
                            </button>
                        </div>
                        {/* FILTER TODO */}
                        <div className="modal-body">
                        <List
                            editTodoListProp={editTodo}
                            removeTodoListProp={removeTodo}
                            list={todoList}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
