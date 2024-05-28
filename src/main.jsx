import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { LeaderBoard } from './Pages/Routes.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <LeaderBoard/>
      }
    ]
  },
  {
    path: "HistoricalTrading",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Historcal Chart",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Scanners",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Alerts",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Basic Backtest",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Advanced Backtest",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "Pricing",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
  {
    path: "My Earning",
    element: <div className='w-full h-screen flex justify-center items-center text-[4rem]'>Work on Progress :)</div>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
