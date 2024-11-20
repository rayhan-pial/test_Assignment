import React from 'react'

import TODO from './TODO'


export default function TODOS( props ) {
    // console.log(props.todos)

  return (
    <>
    <div>
    <TODO />
        {props.todos.map((todo)=>(
            // console.log('todo'),
            console.log(todo),
            <TODO title={todo.title} key={todo.index}/>
        ))}
    </div>
    </>
  )
}
