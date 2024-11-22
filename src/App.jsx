import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {Outlet} from 'react-router-dom'

function App() {

  const [ loading, setLoading ] = useState( true )
  const dispatch  = useDispatch()   
  useEffect( () => {
    authService.getCurrentUser()
    .then( (userData) => {
        if( userData )
        {
          dispatch( login( {userData}))
        }
        else{
          dispatch( logout( {userData} ))
        }
      }
    )
    .finally(
      () => setLoading(  false )
    )
  }, [])

  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap justify-center">
      <div className="bg-gray-400">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  ) : (
    <h1 className='text-2xl'> Not loading </h1>
  )
}

export default App
