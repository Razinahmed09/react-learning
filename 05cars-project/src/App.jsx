import { useState } from 'react'
import './App.css'
import './component/navigation'
import './component/banner-content'
import Navigation from './component/navigation'
import Banner from './component/banner-content'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <Navigation/>,
    <Banner />
    
    </div>
  )
}

export default App
