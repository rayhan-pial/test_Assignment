import React, { useState } from 'react'

export default function NEWTODO( props ) {

  const [todo,setodo] =useState({title:"",description:""});
  const {title,description} = todo;

  const handleChange=(e)=>{
    const fieldName = e.target.name;

    setodo((oldtodo)=>{
      return {...oldtodo, [fieldName]: e.target.value}
  })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.newtodo(todo);
    setodo({title:"",description:""});

  }


  return (
    <>
    <div>
      <h3>Collect Data from a Form</h3>
    </div>
    <form onSubmit={handleSubmit}>
          <div >
            <label htmlFor="title">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={handleChange}
              value={title}
            />
          </div>
          <div >
            <label htmlFor="description">
              Description
            </label>
            <br />
            <input

              type="text"
              name="description"
              id="description"
              required
              onChange={handleChange}
              value={description}
            />
          </div>
          <div >
            <button
              type="submit"
            >
              Send
            </button>
          </div>
    </form>

    </>
  )
}
