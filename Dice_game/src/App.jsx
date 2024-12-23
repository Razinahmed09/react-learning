import { useState } from "react"
import StartGame from "./components/StartGame"
import Gameplay from "./components/Gameplay"


function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => { 
    setGameStarted((prev) => !prev);
  };
  return (
    <>
    {
      gameStarted ? <Gameplay /> : <StartGame toggleGamePlay={toggleGamePlay} />
    }
      
    
    </>
  )
}

export default App
