import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom' /* {}=> const/typed/namedimports */
import Menu from './component/Menu' /* default imports */
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'
import Create from './component/Create'
import Home from './component/Home'
import Update from './component/Update'
import Pnf from './component/Pnf'
import PrivateRouter from './PrivateRoute/PrivateRouter'

import { ToastContainer } from 'react-toastify'

function App(props){
  return(
    <BrowserRouter>
        <Menu/>
        
        <Routes>
         <Route element={<PrivateRouter/>}>
              <Route path={`/`} element={<Home/>}/>
              <Route path={`/create`} element={<Create/>}/>
              <Route path={`/update/:id`} element={<Update/>}/>
         </Route>
          <Route path={`/login`} element={<Login/>}/>
          <Route path={`/register`} element={<Register/>}/>
          <Route path={`/*`} element={<Pnf/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App