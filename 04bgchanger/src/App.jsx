import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="h-screen w-full duration-200 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 px-2 justify-center gap-2">
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded-2xl p-2"><button className='bg-red-400 rounded-full py-2 px-2'>text</button></div>
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded-2xl p-2"><button className='bg-red-400 rounded-full py-2 px-2'>text</button></div>
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded-2xl p-2"><button className='bg-red-400 rounded-full py-2 px-2'>text</button></div>
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded-2xl p-2"><button className='bg-red-400 rounded-full py-2 px-2'>text</button></div>
        <div className="flex flex-wrap justify-center bg-white shadow-lg rounded-2xl p-2"><button className='bg-red-400 rounded-full py-2 px-2'>text</button></div>
      </div>
    </div>
  )
}

export default App





