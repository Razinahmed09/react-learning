import { useState } from 'react'
import Card from './component/cards';

function App() {
  // const [count, setCount] = useState(0)
 let myObj = {
  username : "razin",
  age : 21
 }

let newArr = [1,2,3]
 
  return (
    <>
      <h1 className=" text-white !bg-black  rounded-xl text-5xl font-bold">
      Tailwind test
    </h1>
    <Card username="chaiourcode" someObje={myObj} btnText={"click me"}/>
    <Card someObje={newArr} username="click me" btnText={"visit me"}/>

    </>
  )
}

export default App; 


// props reamaining