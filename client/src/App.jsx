import React from 'react'
import Navbar from './pages/Navbar'
import { Box, ThemeProvider, createTheme } from '@mui/material'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Menu from './pages/Menu'
import Booking from './pages/Booking'
import OurTeam from './pages/OurTeam'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import LoginPage from './pages/Login'
import Register from './pages/Register'
import Dashboard from './admin/Dashboard'
import Dishes from './admin/Dishes'
import AdminProtected from './admin/AdminProtected'
import AdminLayout from './admin/AdminLayout'
import AdminOrders from './admin/AdminOrders'
import AdminHistory from './admin/AdminHistory'
import AdminUsers from './admin/AdminUsers'
import UserProtected from './User/UserProtected'
import Details from './User/Details'
import Cart from './User/Cart'
import ShoppingCart from './User/Cart'
import PaymentAddress from './User/PaymentAddress'
import OrderSuccess from './User/OrderSuccess'
import OrderStatus from './User/OrderStatus'
import Test from './Test'
const theme = createTheme()
const App = () => {


  return <ThemeProvider theme={theme} >
    <BrowserRouter>

      <Routes>
        {/* auth routes */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />

        {/* user routes */}
        <Route path='/' element={<><Navbar /><Outlet /><Footer /></>} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='menu' element={<Menu />} />
          <Route path='booking' element={<Booking />} />
          <Route path='ourteam' element={<OurTeam />} />
          <Route path='testimonial' element={<Testimonial />} />
          <Route path='contact' element={<Contact />} />
          <Route path='details/:id' element={<UserProtected compo={<><Details /><Outlet /></>} />} />
          <Route path='cart/:id' element={<><UserProtected compo={<><Cart /> <Outlet /></>} /></>} />
          <Route path='paymentAddress/:id' element={<><UserProtected compo={<><PaymentAddress /> <Outlet /></>} /></>} />
          <Route path='orderSuccess/:id' element={<><UserProtected compo={<><OrderSuccess /> <Outlet /></>} /></>} />
          <Route path='orderStatus/:id' element={<><UserProtected compo={<><OrderStatus /> <Outlet /></>} /></>} />
        </Route>

        {/* user BOOKING Routes */}



        {/* admin routes */}
        <Route path='/admin' element={<><AdminProtected compo={<><AdminLayout /><Outlet /></>} /></>} >
          <Route index element={<Dashboard />} />
          <Route path='dishesh' element={<Dishes />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='history' element={<AdminHistory />} />
          <Route path='users' element={<AdminUsers />} />
        </Route>


      </Routes>

    </BrowserRouter>
  </ThemeProvider>
}

export default App