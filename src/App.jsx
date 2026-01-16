import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Gigs from './pages/gigs/Gigs';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/mygigs/MyGigs';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
function App() {

  const Layout = ()=>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/my-gigs",
          element:<MyGigs/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App