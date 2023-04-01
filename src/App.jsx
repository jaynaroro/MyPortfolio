import React from 'react'
import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Layout from './components/Layout'

export default function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
      </Routes>
    </div>
  )
}

