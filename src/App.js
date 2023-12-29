
import {
  BrowserRouter as Router,

} from "react-router-dom";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.js"
// import "../src/css/vendor/icons.min.css"
import MainRoute from './Routes/MainRoute';
import PrivateRoute from './Routes/PrivateRoute'
// import { useEffect } from "react";
import $ from 'jquery';
import io from 'socket.io-client';

const socket = io.connect('http://161.97.146.42:7000');
// socket.on("result",(data)=>{
//  alert(data)
// })
function App() {

  return (
    <>

      <Router basename="/fiewin2020">
        {/* Main Routing */}    
        <MainRoute socket={socket} />
        <PrivateRoute socket={socket} />
      </Router>
    </>
  );
}

export default App;
