import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'


export default function AppRouter() {
  return (
    <Routes>
      <Route index path="/" element={<Posts />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}
