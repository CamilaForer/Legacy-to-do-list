import List from "./List";
import todos from "../apis";
import { useState, useEffect } from "react";

const Modal = (_) => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const { data } = await todos.get("/todos");
        setTodoList(data);
    }

    fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    /* FILTER */
/*     const [data, setData] = useState(todos);
    const filterResult = (typeOfCategory) => {
        const result = products.filter(
            (curDate) => {
                return curDate.category === typeOfCategory
            }
        );
        //All products
        setData(result)
    } */

    return (
        <>
            {/* Button trigger modal */}
            <button type="button"class="btn-modal" data-toggle="modal" data-target="#exampleModal">
                📂
                {/* BsFillCollectionFill */}
                {/* AiFillFolderOpen */}
            </button>
            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button className="btn-filter">Eliminadas</button>
                            <button className="btn-filter">Realizadas</button>
                            <button type="button" className="close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">
                                    <i className="black remove icon"></i>
                                </span>
                            </button>
                        </div>
                        {/* FILTER TODO */}
                        <div class="modal-body">
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
