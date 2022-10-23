import { Navigate } from "react-router-dom";
import About from "../components/pages/About";
import Login from "../components/pages/Login";
import PostPage from "../components/pages/PostPage";
import Posts from "../components/pages/Posts";
import NotFound from "../components/pages/NotFound";

// Routes array for authorized users
export const privateRoutes = [
  { path: '/about', component: <About />, exact: true },
  { path: '/posts', component: <Posts />, exact: true },
  { path: '/posts/:id', component: <PostPage />, exact: true },
  { path: '/', component: <Navigate to="/posts" replace />, exact: true },
  { path: "*", component: <NotFound />, exact: true }
]

// Routes array for unauthorized users
export const publicRoutes = [
  { path: '/login', component: <Login />, exact: true },
  { path: '/about', component: <About />, exact: true },
  { path: "*", component: <Navigate to="/login" replace />, exact: true }
]