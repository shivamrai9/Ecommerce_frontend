import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './features/auth/components/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
