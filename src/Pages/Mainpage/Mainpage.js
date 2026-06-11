import { PiStudentFill } from "react-icons/pi";
import mystyle from "./Mainpage.module.css"
import { FaTasks } from "react-icons/fa";
import { MdOutlineTaskAlt, MdPendingActions } from "react-icons/md";


const Mainpage=()=>{
    return(
        <>
            <div className={mystyle.maincontent}>

                <h1>Dashboard Overview</h1>

                <p>Welcome back, Marcus. Here's what's happening today.</p>

                <div className={mystyle.details}>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon1}><PiStudentFill /></div>
                        <div className={mystyle.cardinfo1}>
                            <p>Total Students</p>
                            <h1>50</h1>
                            <p>+25% this month</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon2}><FaTasks /></div>
                        <div className={mystyle.cardinfo2}>
                            <p>Total Task</p>
                            <h1>50</h1>
                            <p>+12% this month</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon3}><MdOutlineTaskAlt /></div>
                        <div className={mystyle.cardinfo3}>
                            <p>Complated Task</p>
                            <h1>50</h1>
                            <p>72% completion rate</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className={mystyle.cardicon4}><MdPendingActions /></div>
                        <div className={mystyle.cardinfo4}>
                            <p>Pending Taks</p>
                            <h1>50</h1>
                            <p>14 high priority</p>
                        </div>
                    </div>

                </div>



                

                <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <h4 className="fw-bolder">Team Overview</h4>
                        <p className={mystyle.view}><a href="#">View all Teams</a></p>
                    </div>

                    <div>

                        <div>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>


                    </div>


                </div>



    
            </div>
           
        </>
    )
}
export default Mainpage;