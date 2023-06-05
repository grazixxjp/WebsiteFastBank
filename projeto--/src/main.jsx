import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Feito from './pages/Feito'
import Login from './pages/Login'
import PedirCartao from './pages/PedirCartao'
import Cadastro from './pages/Cadastro'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
//Rotas das Paginas 
const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Cadastro",
    element: <Cadastro/>
  },
  {
    path: "/PedirCartao",
    element: <PedirCartao/>
  },
  {
    path: "/Feito",
    element: <Feito/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Rotas}/>
  </React.StrictMode>,
)
export default Rotas