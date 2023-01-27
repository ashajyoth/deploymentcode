import React from 'react'
import {Link, useNavigate, Outlet} from "react-router-dom";
import { useWindowResize } from './useWindowResize';
//use navigate is a function and can be used in callback function wherease
// link is in the react component and must render into dom node as a part of return 



const Home = () => {
  const navigate = useNavigate();
  function CreatePost() {
    navigate('/second', {
        state : {
            post_name: "asha",
            post_id : 1,
            post_description: "shshacjdbscfdbsvmccn"
        }
    })
  }
  return (
  <>
  <nav>

  </nav>
     <h1 style={{color:"green"}}>A Computer Science portal for geeks.</h1>
     <button onClick={()=>navigate("/second")}>Go Back Home</button>
     <span onClick={CreatePost}>Create Post</span>
     <Link to = "/second"
     state = {{
        post_name: "asha",
        post_id:1
     }
    
     }>Create POst</Link>
        <Outlet/>
  </>
  )
};
  
export default Home;