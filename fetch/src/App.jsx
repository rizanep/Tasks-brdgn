import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [id,setId]=useState("")
  const [todo,setTodo]=useState([])
  
  useEffect(()=>{
    fetch("https://dummyjson.com/todos")
    .then ((res)=>(res.json()))
    .then ((data)=>{
      setTodo(data.todos)
    })
    console.log(todo);
    
  },[])

  return (
    <>
    <div style={{display:"flex", justifyContent:"center", alignItems:'center', margin:"100px"}} >
      <table border={"large"} style={{fontSize:"50px", margin:"50px"}} >
        <thead>
        <tr  style={{height:"150px"}} >
          <th style={{width:"150px"}} >ID</th>
          <th>TODO</th>
          <th style={{width:"550px"}}>Completed</th>
          <th style={{width:"350px"}}>User Id</th>
        </tr>
        </thead>
        <tbody>
    {todo.map((a)=>(
    <tr style={{backgroundColor:a.completed==true? "green":"red"}}>
      <td style={{textAlign:"center"}} >{a.id} </td>
      <td style={{textAlign:"center"}}>{a.todo} </td>
      <td style={{textAlign:"center"}}>{a.completed==true? "Yes":"No"} </td>
      <td style={{textAlign:"center"}}>{a.userId} </td>
    </tr>
    ))}
</tbody>
      </table>
      </div>
    </>
  )
}

export default App
