import { useState } from 'react' 
import './App.css'

function App() {
  // const [counter, setcounter] = useState(15);


  
  // const addvalue = () => {
  //   if (counter < 20){
  //     setcounter(counter + 1);
  //   }
  //   // console.log("Im Razin Ahmed", Math.random());
  // }
  //   const removeValue = () => {
  //     if (counter > 0) {
  //       setcounter(counter - 1);
  //     }
  //   }
 
  
  // return (
  //   <>
  //   <h1>chai our react</h1>
  //   <h2>counter value</h2>

  //   <button onClick={addvalue}>add value {counter}</button>
  //   <br />
  //   <button onClick={removeValue}>remove value {counter}</button>
  //   <footer>remove value {counter}</footer>
  //   </>
  // )

 
  let [counter, setcounter] = useState(15)

  // let counter = 0

  const addvalue = () => {
    console.log("value added:", counter)
    if (counter < 20){
      counter = counter + 1;
      setcounter(counter);
  }
  }
  const removeValue = () => {
    console.log("value remove", counter)
    if (counter > 0) {
      counter = counter - 1;
      setcounter(counter);
    }
  }
  return (
    <>
    <h1>chai our react</h1>
    <h2>counter value: {counter}</h2>
    <div>
    <button
    onClick={addvalue}
    >Add Value:{counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value:{counter}</button>
    </div>
    <footer >
      footer value is : {counter}
    </footer>
    </>
  )

}

export default App
