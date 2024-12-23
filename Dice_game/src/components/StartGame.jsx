    import React from 'react'
    import styled from 'styled-components'
    const StartGame = ({toggleGamePlay}) => {
      return (
        <div>
          <Container> 
            <div>
            <img 
            src='/img/dices.png'
            alt='dices' 
            />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <Button
                onClick={toggleGamePlay}
                >Play Now</Button>
            </div>
            </Container> 
        </div>
      )
    }
    
    export default StartGame
    

    const Container = styled.div` 
    max-width: 1200px;
    display: flex;
    margin: 0 auto ;
    align-items: center;
    height: 100vh;
    
    .content {
    h1 {
    font-size: 96px;
     }
    }
    
    `;

    const Button = styled.button`
    Border-Radius: 5px;
    font-family: 'Poppins', sans-serif;
    Top :10px;
    Padding: 10px 20px;
    width: 160px;
    Right :18px;
    font-size: 18px;
    Bottom :10px;
    Left: 18px;
    Background: #000000;
    color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: 0.4s background ease-in; 

    
    &:hover {
    background: #ffffff;
    border: 1px solid #000000;
    color: #000000;
    transition: 0.3s background ease-in; 
    }
    
    `;