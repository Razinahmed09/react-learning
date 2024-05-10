import { useState } from 'react' 
import './App.css'

function App() {

 let [counter, setcounter] = useState (15)
  
  // let counter = 15

  const addvalue = () => {
    // console.log("clicked", counter),
    counter = counter + 1
    setcounter(counter)
  }
  const removeValue = () => {
  setcounter(counter - 1)
  }
  return (
    <>
    <h1>chai our react</h1>
    <h2>counter value</h2>

    <button onClick={addvalue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <footer>remove value {counter}</footer>
    </>
  )
}

export default App
