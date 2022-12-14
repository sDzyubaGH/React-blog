import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NotFound from './pages/NotFound'
import PostPage from './pages/PostPage'
import Posts from './pages/Posts'
import { publicRoutes, privateRoutes } from '../router'


export default function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<Posts />} />
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}

      {privateRoutes.map((route, idx) => {
        return <Route key={idx} path={route.path} element={route.component} exact={route.exact} />
      })}

      {publicRoutes.map((route, idx) => {
        return <Route key={idx} path={route.path} element={route.component} exact={route.exact} />
      })}
    </Routes>
  )
}
