import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]= useState(15);
  
  const addValue = () => {
    
    setCounter(counter + 1)
    console.log(counter);
  }

  const removeValue= ()=> {
   
    console.log(counter);
    if ( counter >= 10) {
      setCounter(counter-1)   
    }    
    
  }

  return (
    <>
     <h1> React Counter Project</h1>
     <h2> Counter Value : {counter} </h2>
     <button onClick={addValue}>Add Vaue {counter}</button>
    <br></br>
     <button onClick={removeValue} > Remove Value {counter} </button>
     
    </>
  )
}

export default App
