import React from 'react'
import { Outlet } from "react-router"

function Body() {
  return (<>

    <div> 
      <Outlet/>
    </div>
    </>
 
  )
}

export default Body