import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AdminLogin from './components/AdminLogin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin_login' element={<AdminLogin />} />
        <Route path='/admin' element={
          <PrivateRoute requiredRole='admin'>
            <AdminDashboard />
          </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
