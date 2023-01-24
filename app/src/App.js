import React, { useState, useEffect } from "react";
import "./App.css"
import todos from "./apis";
import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";
import Modal from './components/Modal'
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => { 
    async function fetchData() { 
        const { data } = await todos.get("/todos"); 
        const filteredData = data.filter(todo => todo.deleted === false ); 
        setTodoList(filteredData); } 
  fetchData(); }); 


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
  return (
    <div className="ui container center aligned">
      <header className="header">
        <p className="title">Flores del Tambo</p>
        <p className="caption">To-do list</p>
      </header>
      <Section>
        <Form addTodo={addTodo} />
      </Section>
      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
      <Modal/>
    </div>
  );
};

export default App;
