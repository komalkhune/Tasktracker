import { BiLogOut } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
// import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import mystyle from "./Sidebar.module.css"
import { actions } from "../Store.js/Store";
import { FaUser } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import axios from "axios";
import { useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { SiGoogletasks } from "react-icons/si";


const Sidebar=()=>{

     const emdata=useSelector((state)=> state.hollData.employeedata)
    const etdata=useSelector((state)=> state.hollData.teamdata)

     const hrinfo = useSelector((state)=> state.signingData.hrsignupdata)

      const taskdata=useSelector((state) => state.task)

    


     const [data, setData]=useState(false);
     const [ttdata, setttData]=useState(false);

     const [sidebar, setSidebar]=useState(false)

    


   //  const Navigate=useNavigate();
     const dispatcher=useDispatch();
    const open=useSelector((state)=>state.open);

    const sidebarclose=()=>{
       dispatcher(actions.sbarclose)
    }
   //  console.log("open")

   //  console.log(open)

    
   console.log("emememememem" ,emdata)




   const Logout=()=>{


      localStorage.setItem("hrsignupdata", JSON.stringify(hrinfo));

      localStorage.setItem("edata", JSON.stringify(emdata));

      localStorage.setItem("tdata", JSON.stringify(etdata));

      localStorage.setItem("taskdata", JSON.stringify(taskdata));


   
   }






   return(
        <div>

            <div className={`${mystyle.sidebar} ${open ? mystyle.show : ""}`}>

               <button className={mystyle.closeBtn}  onClick={()=>dispatcher(actions.closeSidebar())}> <IoMdCloseCircleOutline size={22}/></button>
               
                {/* <div className={mystyle.logo}><span className={mystyle.storageicon}><FaUser size={22} /></span><span>Employee Management</span></div> */}
                 <div className={mystyle.header}>
                        <div className={mystyle.homeicon}><LuLayoutDashboard /></div>
                        <div className={mystyle.pname}><p className={mystyle.hometitle}>TaskTracker<span>PRO</span></p></div>
                    </div>
                                   
                    <ul className={mystyle.menuList}>
                  
                       <li><Link to="mainpage" className={mystyle.link}><LuLayoutDashboard  size={22}/> Dashboard</Link></li>
                       <li><Link to="addemployee" className={mystyle.link}><IoPersonAddSharp  size={22}/> Add Employee</Link></li>
                       <li><Link to="employeelist" className={mystyle.link}><CiViewList  size={22}/>Employee list</Link></li>
                        <li><Link to="createteam" className={mystyle.link}><MdCreateNewFolder   size={22}/>Create Team</Link></li>
                         <li><Link to="teams" className={mystyle.link}><RiTeamLine  size={22}/>View Teams</Link></li>
                         <li><Link to="taskassign" className={mystyle.link}><GoTasklist  size={22}/>Assign Task</Link></li>
                         <li><Link to="taskstatus" className={mystyle.link}><SiGoogletasks  size={22}/>Tast Status</Link></li>
                       <li><Link to="/" onClick={Logout} className={mystyle.link}><BiLogOut size={22} /> Logout</Link></li>

                  
                    </ul>
               
                </div>


        </div>
           

    
    )
}
export default Sidebar;