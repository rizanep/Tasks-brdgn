import { useEffect, useRef, useState } from "react";
import Formvalidation from "./Formvalidation";
import "bootstrap/dist/css/bootstrap.min.css"

export default  function App() {
  // const div = useRef();
  // const [count,setCount]=useState(0)
  // useEffect(()=>{
  //   if(count%2==0){
  //     div.current.style.backgroundColor="red"
  //   }else{
  //     div.current.style.backgroundColor="yellow"
  //   }
  // }
  // )

  return (
    <>
    {/* <div style={{display:'flex', flexDirection: "column", justifyContent:'center', alignItems:'center' , width:"100vw", height:"100vh"}}ref={div}>
      <div><h1 >{count}</h1></div>
      
      <div style={{ display: "flex", gap: "10px"}} > 
      <button onClick={()=>setCount(count+1)} >increase</button>
      <button onClick={count>0?()=>setCount(count-1):null}>decrease</button>
      <button onClick={()=>setCount(0)}>reset</button>
      </div>
      </div> */}
      <Formvalidation/>
    </>
  );
}