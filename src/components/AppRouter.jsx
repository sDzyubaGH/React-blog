import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'


export default function AppRouter() {
  const isAuth = false

  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<Posts />} />
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> */}
      {
        isAuth
          ?
          privateRoutes.map((route, idx) => {
            return <Route key={idx} path={route.path} element={route.component} exact={route.exact} />
          })
          :
          publicRoutes.map((route, idx) => {
            return <Route key={idx} path={route.path} element={route.component} exact={route.exact} />
          })
      }
    </Routes>
  )
}
