// import React from 'react'
import ReactDOM from 'react-dom/client'
import Chai from './chai.jsx'
import App from './App.jsx'

// function Myapp(){
//     return (
//         <div>
//             <h1>Custom app !</h1>
//         </div>
//     )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https//google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }

// const anotherElement = (
//     <a href="https//google.com" tager="_blank">visit google</a>
// )

// const anotherUser = ("chai or react")

// const ReactElement = React.createElement(
//     'a',
//     { href: 'https//google.com', target: '_blank'}, 
//     'click me to see google',
//     anotherUser
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    // anotherElement
    // ReactElement,
    // anotherElement,
        <App />,
        // <Myapp/>,
        <Chai/>
)
