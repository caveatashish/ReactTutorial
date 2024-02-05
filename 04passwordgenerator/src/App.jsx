import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("23")

  const passwordGenerator = useCallback(() => {
    console.log("Password Generator Called")
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className=''> Password Generator</h1>

      <div className='w-full max-w-md text-oragne-500'>
        <input type='text'
          value={password} placeholder='password'  readOnly/>
        <button > Copy  </button>
      </div>

      <div>
        <input type="range"
          min={0} max={20} value={length} 
          onChange={(e) => { setLenght(e.target.value) }}/>
        <label >Length {length}</label>
      </div>

      <div>
        <input type="checkbox"
        defaultChecked={numberAllowed}
          onChange={(e) => { setNumberAllowed((prev) => !prev) }}
        />
        <label >Number Allowed </label>
      </div>

      <div>
        <input type="checkbox"
          onChange={(e) => { setCharAllowed((prev) => !prev) }}
        />
        <label >Character Allowed </label>
      </div>
    </>
  )
}

export default App
