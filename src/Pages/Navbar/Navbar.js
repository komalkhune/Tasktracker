import { IoIosSearch } from "react-icons/io"
import { RiMenuUnfold2Fill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import mystyle from "./Navbar.module.css"
import { actions } from "../Store.js/Store"

const Navbar=()=>{

    const dispatcher=useDispatch()

   

    return(
        <div>

            <div className={mystyle.topbar}>

                <button className={mystyle.menuBtn} onClick={()=>dispatcher(actions.openSidebar())}><RiMenuUnfold2Fill size={22}/> </button>
               
               {/* <div className={mystyle.searchbox}><span className={mystyle.searchicon}><IoIosSearch  /></span><input type="text" className={mystyle.search} placeholder="Search Project" /></div> */}
               
            </div>

        </div>
    )
}
export default Navbar;