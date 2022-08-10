import React from 'react'
import SideBar from './components/sidebar/SideBar'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './app.scss'
import UserPage from './pages/userpage/UserPage'
import NewUser from './pages/newuser/NewUser'
import ProductList from './pages/productlist/ProductList'
import ProductPage from './pages/productpage/ProductPage'
import NewProduct from './pages/newProduct/NewProduct'

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
            <Route path='newuser' element={<NewUser />} />
            <Route path='products' element={<ProductList />} />
            <Route path='product/:productId' element={<ProductPage />} />
            <Route path='newproduct' element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App