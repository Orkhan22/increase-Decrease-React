// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
const [num,setUse]=useState(0)
// function artir(){
//   return(
//     num(setUse+1)
//   )
// }
// function azalt(){
//   return(
//     num(setUse-1)
//   )
// }
// function artir5(){
//   return(
//     num(setUse+5)
//   )
// }
// function azalt5(){
//   return(
//     num(setUse-5)
//   )
// }

const array = (a)=>{
  setUse(num+a)
}
  return (
    <div className="App">
      <h1>Counter:<span style={{color:num === 0 ?"blue" : num > 0 ? "green" :"red"}}>{num}</span></h1>
      <p >{num === 0 ?"Sifirdir" : num > 0 ? "Musbetdir" :"Menfidir"}</p>
      {/* <button onClick={artir}>artir</button>
      <button onClick={azalt}>azalt</button>
      <button onClick={artir5}>artir+5</button>
      <button onClick={azalt5}>azalt-5</button> */}
<button onClick={()=>{array(+1)}}> Azalt+1</button>
<button onClick={()=>{array(-1)}}> Azalt-1</button>
<button onClick={()=>{array(+5)}}> Azalt+5</button>
<button onClick={()=>{array(-5)}}> Azalt-5</button>
    </div>
  );
  
}

export default App;
