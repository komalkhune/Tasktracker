import { Outlet } from "react-router"
import Usernavbar from "../Navbar/Usernavbar"
import Usersidebar from "../Sidebar/Usersidebar"
import mystyle from "./Userdashboard.module.css"

const Userdashboard=()=>{
    return(
        <>

        <div className={mystyle.layout}>
    
          <Usersidebar />
    
          <div className={mystyle.right}>
            <Usernavbar />
    
            <div className={mystyle.mainContent}>
              <Outlet />
            </div>
           
    
          </div>
    
        </div>
        
        </>
    )
}
export default Userdashboard;