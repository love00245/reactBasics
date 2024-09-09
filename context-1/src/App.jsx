// import { useState } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'

import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login";
import Profile from "./components/Profile";
// function App() {

//   return (
//     <>
      
//     </>
//   )
// }

// export default App

function App() {
  return (
    <UserContextProvider>
        <h1 >Helo</h1>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>

  )
}

export default App