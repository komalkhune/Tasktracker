import { IoIosSearch } from "react-icons/io"
import { RiMenuUnfold2Fill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import mystyle from "./Usernavbar.module.css"
import { actions } from "../Store.js/Store"
import { useState } from "react"


const Usernavbar=()=>{

     const dispatcher=useDispatch()


    const [searchId, setSearchId] = useState("");


   const search=()=>{
     dispatcher(actions.teamid(searchId))
   }



   


    return(
        <>

         <div>

            <div className={mystyle.topbar}>

                <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
               
               {/* <div className={mystyle.searchbox}><span className={mystyle.searchicon}><IoIosSearch  /></span><input type="text" className={mystyle.search} placeholder="Search Project" /></div> */}

               {/* <input className={mystyle.searchbar} type="text" placeholder="Enter Team ID" value={searchId} onChange={(e) =>   setSearchId(e.target.value) }/> */}

                        {/* <button className={mystyle.searchbtn} onClick={search}>Search</button> */}
               
            </div>

        </div>
        
        </>
    )
}
export default Usernavbar;