import React from 'react'
import { BrowserRouter } from 'react-router-dom' /* {}=> const/typed/namedimports */
import Menu from './component/Menu' /* default imports */
import Login from './component/Auth/Login'
import Register from './component/Auth/Register'

function App(props){
  return(
    <BrowserRouter>
        <Menu/>
        <Register/>

    </BrowserRouter>
  )
}
export default App