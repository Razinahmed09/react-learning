import { useState } from 'react' 
import './App.css'

function App() {
  const [counter, setcounter] = useState(15);

  // const addvalue = () => {
  //   if (counter < 20) {
  //     setcounter(counter + 1);
  //   }
  // }

  // const removeValue = () => {
  //   if (counter > 0) {
  //     setcounter(counter - 1);
  //   }
  const addvalue = () => {
    if (counter < 20){
      setcounter(counter + 1);
    }
  }
    const removeValue = () => {
      if (counter > 0) {
        setcounter(counter - 1);
      }
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
