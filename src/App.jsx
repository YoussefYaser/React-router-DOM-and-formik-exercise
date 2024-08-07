import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'


export default function App() {



  let routes = createBrowserRouter([
    {path: '/React-router-DOM-and-formik-exercise/', element: <Layout></Layout>, children: [
      {index: true, element:<Home></Home>}, 
      {path: '/React-router-DOM-and-formik-exercise/home', element: <Home></Home>}, 
      {path: '/React-router-DOM-and-formik-exercise/about', element: <About></About>}, 
      {path: '/React-router-DOM-and-formik-exercise/portfolio', element: <Portfolio></Portfolio>},
      {path: '/React-router-DOM-and-formik-exercise/contact', element: <Contact></Contact>},
      {path: '*', element: <Notfound></Notfound>}
    ]}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

