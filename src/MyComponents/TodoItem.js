import React from 'react'
import Card from 'react-bootstrap/Card';
const TodoItem = ({todo,onDelete}) => {
  return (
    <div style={{width:"20%"},{textAlign:"center"}}>
      <Card>
      <h4>{todo.title}</h4>
      <Card.Body >{todo.desc}</Card.Body>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
      </Card>
    </div>
  )
}

export default TodoItem
