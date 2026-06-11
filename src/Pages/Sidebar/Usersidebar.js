import { BiLogOut } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { SiGoogletasks } from "react-icons/si";
import { Link } from "react-router";
import mystyle from "./Usersidebar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store.js/Store";


const Usersidebar=()=>{

     const userinfo = useSelector((state)=> state.signingData.stusignupdata)

       const teamlogin = useSelector((state)=> state.signingData.tresidata)


      const taskStatus = useSelector((state) => state.taskStatus);
     const taskfile = useSelector((state)=>state.taskfile)


      const dispatcher=useDispatch();
    const open=useSelector((state)=>state.open);

    const sidebarclose=()=>{
       dispatcher(actions.sbarclose)
    }


    const Logout=()=>{

         localStorage.setItem("usersignupdata", JSON.stringify(userinfo));

         localStorage.setItem("teamlogin", JSON.stringify(teamlogin));

         localStorage.setItem("taskstatus", JSON.stringify(taskStatus))

         localStorage.setItem("taskfile", JSON.stringify(taskfile))


         
    }
    return(
        <>

         <div>

            <div className={`${mystyle.sidebar} ${open ? mystyle.show : ""}`}>

               <button className={mystyle.closeBtn}  onClick={()=>dispatcher(actions.closeSidebar())}> <IoMdCloseCircleOutline size={22}/></button>
               
                {/* <div className={mystyle.logo}><span className={mystyle.storageicon}><FaUser size={22} /></span><span>Employee Management</span></div> */}
                 <div className={mystyle.header}>
                        <div className={mystyle.homeicon}><LuLayoutDashboard /></div>
                        <div className={mystyle.pname}><p className={mystyle.hometitle}>TaskTracker<span>PRO</span></p></div>
                    </div>
                                   
                    <ul className={mystyle.menuList}>
                  
                       <li><Link to="teamsignup" className={mystyle.link}><LuLayoutDashboard  size={22}/> Dashboard</Link></li>
                      
                         <li><Link to="teamsuser" className={mystyle.link}><RiTeamLine  size={22}/>View Teams</Link></li>
                        
                         {/* <li><Link to="taskstatus" className={mystyle.link}><SiGoogletasks  size={22}/>Task Status</Link></li> */}
                       <li><Link to="/" onClick={Logout} className={mystyle.link}><BiLogOut size={22} /> Logout</Link></li>

                  
                    </ul>
               
                </div>


        </div>
        
        </>
    )
}
export default Usersidebar;