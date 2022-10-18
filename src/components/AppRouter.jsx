import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PostPage from './pages/PostPage'
import Posts from './pages/Posts'


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<Posts />} />
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}
