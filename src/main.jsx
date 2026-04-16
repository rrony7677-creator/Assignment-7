import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Friendpage from './pages/Friendpage';
import Stats from './pages/Stats';
import CallList from './pages/CallList';
// import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
      index: true,
      element: <HomePage/>
    },
    {
      path:"/friends",
      element:<Friendpage/>
    },
    {
      path:"/stats",
      element:<Stats/>
    },
    {
      path:"/callList/:id",
      element:<CallList/>,
      loader:()=> fetch("/friendData.json")
    }
  
  ],
  // errorElement:<ErrorPage></ErrorPage>
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />,
  </StrictMode>,
)
