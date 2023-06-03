function Experience() {
  return(
      <>  {/* <> is like an empty container that doesn't add more to the HTML. Basically a React fragment  */}
          <h3>Software Developer</h3> 
          <h4>Sigma Lab Sdn Bhd</h4>
      </>
  )
}

function Project1(){
  return(
    <>
      <h3>Slap N&apos; Go E-wallet</h3>
      <ul>
        <li>Build the server-side logic CRUD features with ExpressJS. Covered on HTTP requests, routing and middleware</li>
        <li>Used Replit to act as a noSQL database and a server to handle the incoming HTTP requests</li>
        <li>Effectively employed Insomnia for efficient API testing, debugging, optimizing request construction and response validation throughout the project</li>
        <li>Used it to teach Intermediate Workshop students on learning API, Promises, CRUD features and DOM concepts</li>
      </ul>
    </>
  )
}

function Project2(){
  return(
    <>
      <h3>Workout App</h3>
      <ul>
        <li>Developed a Workout App that connects with a workout API to retrieve exercises based on the user&apos;s specified muscle type for training.</li>
        <li>Implemented user setup and login features, allowing users to create accounts, log in, and securely authenticate their sessions.</li>
        <li>Implemented a timer feature allowing users to time their workouts and a feature for users to add their favorite exercises to their personal collection.</li>
        <li>Designed and implemented an algorithm for a streak system, tracking user&apos;s workout consistency, and visualized it through a calendar interface.</li>
      </ul>
    </>
  )
}

function Project3(){
  return(
    <>
      <h3>SigmaVerse</h3>
      <ul>
        <li>Designed the world map with Tiled Map Editor</li>
        <li>Added customized interaction features for users using PhaserJS</li>
        <li>Integrated collaborative tools for effective online learning experience</li>
        <li>Integrated forms for students to sign up and learning resources to increase student exposure to learning materials</li>
      </ul>
    </>
  )
}

function App(){
  return(
    <>
      <h1>Jing Yong</h1>
      <h2>Eudcator and Software Developer</h2>
      <Experience/>
      <Project1/>
      <Project2/>
      <Project3/>
    </>
  )
}

export default App

//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//function App() {
//  const [count, setCount] = useState(0)

//  return (
//    <>
//      <div>
//        <a href="https://vitejs.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.jsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}

//export default App
