import './App.css';
import Header from "./MyComponents/Header"
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import React, { useState,useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

import { BrowserRouter as Router,Switch,Route,Link,Routes } from 'react-router-dom';
import About from './MyComponents/About';




function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am on delete of todo ",todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }
  const addTodo=(title,desc)=>{
    let sno=todos.length+1;
    let todo={
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(title,desc);
    var chk=0;
    for(let i in todos) if(todos[i].title==todo.title && todos[i].desc==todo.desc) chk=1;
    if(!chk){
    console.log("adding item",todo);
  }
  else{
    alert("alredy added!");
    return 1;
  }
  setTodos([...todos,todo]);

  }


  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header title="myTodoslist" searchbar={true}/>
      <AddTodo addTodo ={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/> 
      {/* <Router>
        <Routes>
            <Route path="https://m-o-h-i-t-g-u-p-t-a.github.io/TodoApplication/" element={<>
              <AddTodo addTodo ={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/> 
              </>}/>
            <Route path='https://m-o-h-i-t-g-u-p-t-a.github.io/TodoApplication/about' element={<About/>}/>
        </Routes>
      </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
