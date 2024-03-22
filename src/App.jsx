import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chart from "./views/chart";
import News from "./views/news";
import Screener from "./views/screener";
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element: < Chart />
          },
          {
            path: "/news",
            element: < News />
          },
          {
            path: "/screener",
            element: < Screener />
          },
        ])
      } />
    </>
  )
}

export default App
