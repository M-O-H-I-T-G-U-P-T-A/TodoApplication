import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc) {
      alert("title or Description cannot be empty");
      return;
    }
    props.addTodo(title,desc);
    setTitle("");
    setDesc("");
    }

    return (
        <div className='container my-3 text-center'>
          <h2>Add a Task</h2>
          <Form onSubmit={submit}>
            <Form.Group >
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} placeholder="Enter Title" onChange={(e)=>{setTitle(e.target.value)}}/>
            </Form.Group>
      
            <Form.Group className="mb-3 my-3">
              <Form.Label>Enter Description</Form.Label>
              <Form.Control type="text" value={desc} placeholder="Enter Description" onChange={(e)=>{setDesc(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              ADD
            </Button>
          </Form>
        </div>
      );
}

export default AddTodo
