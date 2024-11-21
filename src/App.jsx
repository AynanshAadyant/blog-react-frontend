import React from 'react'

function App() {
  const react_app_appwrite = import.meta.env.VITE_APPWRITE_URL 
  console.log( react_app_appwrite )
  return (
    <>
      <h1> This is the initial state </h1>
    </>
  )
}

export default App
