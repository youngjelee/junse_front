import About from "./pages/About"
import {MainLayout , TestLayout} from "./layouts"

import Main from "./pages/Main"

export default function Router() {

  const routeArr = 
  [ 
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {index : true , element :<Main/>}, 
        { path:"about", element : <About/>}
      ]
    },
    {
      path:"/test",
      element:<TestLayout/>
    }
  ]
  return routeArr

}
