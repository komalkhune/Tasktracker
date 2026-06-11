import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import mystyle from "./Hrdashboard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { actions } from "../Store.js/Store";

const Hrdashboard=()=>{

   const dispatcher=useDispatch();



    return(
    <div className={mystyle.layout}>

      <Sidebar />

      <div className={mystyle.right}>
        <Navbar />

        <div className={mystyle.mainContent}>
          <Outlet />
        </div>
       

      </div>

    </div>
    )
}
export default Hrdashboard;