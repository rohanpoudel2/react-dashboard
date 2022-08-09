import React from 'react'
import SideBar from './components/sidebar/SideBar'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './app.scss'
import UserPage from './pages/userpage/UserPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopBar />
        <div className='container'>
          <SideBar />
          <Routes path='/' >
            <Route index element={<Home />} />
            <Route path='users' element={<UserList />} />
            <Route path='user/:userId' element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App