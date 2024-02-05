import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const[length, setLenght] =  useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)

  const[password, setPassword] = useState("")


  const passwordGenerator = useCallback( ()={
    let pass = ''
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    

    

  },[length,numberAllowed,charAllowed, setPassword])


  return (
    <>
     <h1 className='text-4xl text-center'> Password Generator</h1>
    </>
  )
}

export default App
