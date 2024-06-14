import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <nav className='flex justify-around py-2'>
          <div>
            <img
              src="/img/brand_logo.png"
              alt="" />
          </div>

          <ul className='flex gap-3'>
            <li href="#">home</li>
            <li href="#">About</li>
            <li href="#">Gallery </li>
            <li href="#">Contact Us</li>
          </ul>
          <button
            className='bg-red-600 text-white rounded-full py-2 px-4'
          >
            login
          </button>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-6">
                
            </div>
            <div className="col-6">

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
