
import './App.css'
import Navbar from './components/Navbar.component'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home.page'
import UserAuthForm from './pages/userAuthForm.pages'


const App  = ()=> {
  
  return (
    <>
    <Routes> 
      <Route exact element= {<Navbar/>}>
      {/* exact is including becuase we want  to show in all the pages and the navbar is rap because we of the exact function */}
      <Route path='/' element={<Home/>}/>
      <Route path="/signin" element={<UserAuthForm type='sign-in'/>}/>
      <Route path="/signup" element={<UserAuthForm type='sign-up'/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App