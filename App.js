import React, { Component } from 'react'
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
  export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>this is the main app</h1>

        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>

        </Routes>

      </div>
    )
  }
}
  