import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState (false);
  const [charactar, setcharactar] = useState (false)
  const [Password, setpassword] = useState("")

  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "123456789"
    if (charactar) str += "!@#$%^&*(){}"

    for (let i = 0; i <= array.length; index++) {
      const element = array[index];
      
    }


  },[lengthnumber, charactar, Password])



  return (
    <>
    <div className='bg-gray-400 max-w-md w-full mx-auto shadow-lg rounded-lg'>
      <h1 className='text-2xl text-white text-center pt-10'>Password Genrator</h1> 
      <div className='flex flex-col justify-center p-2'>
        <input type="password" className='rounded-lg p-2' placeholder='Password' />
      </div>
    </div>
    </>
  )
}

export default App
