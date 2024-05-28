import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { LeaderBoard } from './Pages/Routes.js';
import Errorpage from './Pages/errorpage/Errorpage.jsx';

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
    element: <Errorpage/>,
  },
  {
    path: "Historcal Chart",
    element: <Errorpage/>
  },
  {
    path: "Scanners",
    element: <Errorpage/>,
  },
  {
    path: "Alerts",
    element: <Errorpage/>,
  },
  {
    path: "Basic Backtest",
    element: <Errorpage/>,
  },
  {
    path: "Advanced Backtest",
    element: <Errorpage/>,
  },
  {
    path: "Pricing",
    element: <Errorpage/>,
  },
  {
    path: "My Earning",
    element: <Errorpage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
