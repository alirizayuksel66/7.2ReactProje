import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/login";
import Page404 from "./pages/404";

const routes = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'blog',
                element: <BlogLayout />,
                children: [
                    {
                        index: true,
                        element: <Blog />
                    },
                    {
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        path: 'post/:id/:url',
                        element: <Post />
                    },
                    {
                        path: 'profile',
                        element: <PrivateRoute><Profile /></PrivateRoute>
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        path: '*',
        element: <Page404 />
    }
]

export default routes