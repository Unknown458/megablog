import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store  from './Store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Authlayout from './Components/AuthLayout.jsx'
import Login from './Components/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Allpost from './Pages/Allpost.jsx'
import Addpost from './Pages/Addpost.jsx'
import Editpost from './Pages/Editpost.jsx'
import Post from './Pages/Post.jsx'


const router =createBrowserRouter([
  {
    path:'/',
    element:<App/> ,
    children:[  {path:'/',element:<Home/>},
      {path:'/login',element:(
        <Authlayout athentication={false}>
          <Login/>
        </Authlayout>
      )},
      {
        path: "/signup",
        element: (
            <Authlayout authentication={false}>
                <Signup />
            </Authlayout>
        ),
    },
    {
        path: "/all-posts",
        element: (
            <Authlayout authentication>
                {" "}
                <Allpost />
            </Authlayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <Authlayout authentication>
                {" "}
                <Addpost />
            </Authlayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        element: (
            <Authlayout authentication>
                {" "}
                <Editpost />
            </Authlayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
