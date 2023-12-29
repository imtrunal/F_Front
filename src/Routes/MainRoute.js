import * as React from 'react'
import { useRoutes } from "react-router-dom";
import Login from "../Component/Auth/Login";
import Register1 from "../Component/Auth/Register1";

const MainRoutes=({socket})=>{
    const routes = useRoutes([
      { path: "/register", element: <Register1 /> },   
      { path: "/login", element: <Login socket={socket}/> },
      { path: "/", element: <Login socket={socket}/> },
    ])
    return routes
  }

  export  default  MainRoutes 