import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  
  return (
    <div className='container my-5'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length? props.todos.map((element)=>{
        return (<TodoItem todo={element} key={element.sno} onDelete={props.onDelete}/>)
      }):<div className='container text-center'>No tasks to show</div>}
    </div>
  )
}

export default Todos
