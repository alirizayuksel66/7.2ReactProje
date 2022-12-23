import { Route, Routes, Link, NavLink } from "react-router-dom";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/404";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/login";
import HomeLayout from "./pages/HomeLayout";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="blog" element={<BlogLayout />}>
            <Route index={true} element={<Blog />} />
            <Route path="categories" element={<Categories />} />
            <Route path="post/:id/:url" element={<Post />} />
          </Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>
        <Route path="/auth" element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;