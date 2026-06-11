import { useDispatch, useSelector } from "react-redux";
import mystyle from "./Usermainpage.module.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineTaskAlt, MdOutlineWatchLater, MdPendingActions, MdTaskAlt } from "react-icons/md";
import { FaLock, FaTasks, FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GoTasklist } from "react-icons/go";
import { GiConsoleController, GiProgression } from "react-icons/gi";
import { useEffect, useState } from "react";
import { actions } from "../Store.js/Store";
import { Link, useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";


const Usermainpage=()=>{
     const dispatcher=useDispatch(); 
    const navigate=useNavigate();

     const taskdata=useSelector((state) => state.task)

    const teamlogin = useSelector((state)=> state.signingData.tresidata)
    
      const taskStatus = useSelector((state) => state.taskStatus);
     
      const taskfile = useSelector((state)=>state.taskfile)
      
    const etdata=useSelector((state)=> state.hollData.teamdata)


      console.log("useSelectortaskfile", taskfile)

      const [file, setFile]=useState(null)

      const FileChange = ( e, id ) => { const selectedFile = e.target.files[0];


  console.log("RAW FILE:", selectedFile);

       setFile(selectedFile);

        const taskFile = { [id]: selectedFile };

  console.log("taskFile",taskFile);


        dispatcher( actions.taskFile(taskFile)
        );
      };


    //   for save status


     const changeStatus = (id, status) => {


    const taskStatuss = { [id]: status };

  console.log("klklklklkl",taskStatuss);

  dispatcher(  actions.taskstatus(taskStatuss)  );

};


const [teamName, setTeamName] = useState("");

// const [teamid, setTeamid] = useState("");

const [filteredTask, setFilteredTask] = useState([]);

const [tasks, setTasks] = useState(0);


    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);
     const [erroremail, setErroremail]=useState(false);
    const [errorpass, setErrorpass]=useState(false);



  const search = () => {

  const teamfound = teamlogin.find( (item) => item.email === username && item.password === password );

  if (teamfound) {

    const teamid = teamfound.email;

    

    // Filter task
    const filtered = taskdata.filter( (x) => x.tid.toString() === teamid );
    console.log("filtered",filtered)
     
    setFilteredTask( filtered );

    // Total tasks
    setTasks( filtered.length);

    
    

    // Team name
    const teamMatch = etdata.find( (x) => x.tid.toString() === teamid );

    setTeamName( teamMatch ?.teamname || "" );

  } else if ( username === "" || password === "" ) {
    setError(true);
  } else {
    setErrorvalid(true);
  }
};


  
const task= filteredTask.length;

const pending = filteredTask.filter( (x) => (taskStatus[ x.taskid ] || "Pending") === "Pending" ).length;
    console.log("pending",pending)
    // setPendingCount(pending);

    // Progress
    const progress = filteredTask.filter( (x) => taskStatus[ x.taskid ] === "Progress" ).length;
    console.log("progress",progress)
     
    // setProgressCount(progress);

    // Complete
    const complete = filteredTask.filter( (x) => taskStatus[ x.taskid ] ===  "Done" ).length;
    console.log("complete",complete)
    
    // setCompleteCount( complete );
    
    
   


  const getColor = (status) => {
    if (status === "Pending") return "rgb(204, 6, 184)";
    if (status === "Progress") return "orange";
    if (status === "Done") return "rgb(3, 180, 62)";
  };

  const getWidth = (status) => {
    if (status === "Pending") return "30%";
    if (status === "Progress") return "60%";
    if (status === "Done") return "100%";
  };



      const close=()=>{
        setError(false)
         setErrorvalid(false);
         setErroremail(false);
         setErrorpass(false);
    }





    return(
        <>
        
          <div className={mystyle.fullpage}>

             <div className={mystyle.page}>

                <div className={mystyle.header}>
                    <div className={mystyle.homeicon}><LuLayoutDashboard /></div>
                    <div className={mystyle.pname}><p className={mystyle.hometitle}>TaskTracker<span>PRO</span></p></div>
                </div>

                <div>

                  {error && (
                <div className={mystyle.errorbox}>
                  <p> Please Enter Correct Data</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

              {erroremail && (
                <div className={mystyle.errorbox}>
                  <p> Email is Invalid</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

               {errorpass && (
                <div className={mystyle.errorbox}>
                  <p>password is Invalid</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

              {errorvalid && (
                <div className={mystyle.errorbox}>
                  <p> Please Signup First</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}



                <div className={mystyle.formdetails}>
                    
                  <input className={mystyle.inputfield} type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
                
                  <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                
                  <button className={mystyle.searchbtn} onClick={search}>Search Task</button>

                </div>



                <div className={mystyle.maincontent}>

                <h1>Welcome back, {teamName}</h1>

                <p>You have {tasks} tasks that require your attention today.</p>

                <div className={mystyle.details}>

                    <div className={mystyle.detailscard}>
                        <div className="d-flex justify-content-between ">
                             <div className={mystyle.cardicon1}><GoTasklist  /></div>
                             <div className={mystyle.status1}><p>TOTAL</p></div>

                        </div>
                        <div className={mystyle.cardinfo1}>
                            <h1>{tasks}</h1>
                            <p>Assigned Tasks</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className="d-flex justify-content-between ">
                             <div className={mystyle.cardicon2}><MdOutlineWatchLater /></div>
                             <div className={mystyle.status2}><p>PENDING</p></div>

                        </div>
                        <div className={mystyle.cardinfo2}>
                            <h1>{pending}</h1>
                            <p>Action Required</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className="d-flex justify-content-between ">
                             <div className={mystyle.cardicon3}><GiProgression/></div>
                             <div className={mystyle.status3}><p>ACTIVE</p></div>

                        </div>
                        <div className={mystyle.cardinfo3}>
                            <h1>{progress}</h1>
                            <p>Completion Rate</p>
                        </div>
                    </div>

                    <div className={mystyle.detailscard}>
                        <div className="d-flex justify-content-between ">
                             <div className={mystyle.cardicon4}><MdTaskAlt /></div>
                             <div className={mystyle.status4}><p>DONE</p></div>

                        </div>
                        <div className={mystyle.cardinfo4}>
                            <h1>{complete}</h1>
                            <p>Completed Tasks</p>
                        </div>
                    </div>

                </div>

            </div>    

             <h4 className={mystyle.youretask}> Youre Tasks</h4>

            {/* {
              teamid !== "" &&
              filteredTask.length === 0 && (
                <p style={{ color: "red" }}>
                  Team ID not found
                </p>
              )
            } */}

              <div className={mystyle.tasks}>


    
             
                {
                    filteredTask.map((x)=>{
                         const status = taskStatus[x.taskid];

                         console.log(status)
                       return(
                        <div className={mystyle.taskdiv}>
                            <p className={mystyle.taskid}> Task_id :-{x.taskid}</p>
                            <p className={mystyle.tid}> T_id :-{x.tid}</p>
                            <p><span className={mystyle.level}>{x.level}</span></p>
                             <h3>{x.title}</h3>
                              <p className={mystyle.desc}>{x.desc}</p>
                              <div className={mystyle.duration}>
                                 <p>Assign on:-{x.tdate}</p>
                                 <p>Deadline:-{x.ldate}</p>
                              </div>  

                             <p className={mystyle.progressstatus} style={{ color: getColor(status) }} >
                               {status}
                             </p>
                       
                             <div className={mystyle.progresscontainer}>
                               <div className={mystyle.progressbar}
                                 style={{ width: getWidth(status), backgroundColor: getColor(status), }}></div>
                             </div>


                              <div className={mystyle.taskbtn}>
                                <button style={{ backgroundColor: status === "Pending" ? "rgb(204, 6, 184)" : "", }} onClick={() =>  changeStatus(x.taskid, "Pending")}>
                                  Pending
                                </button>
                        
                                <button style={{ backgroundColor: status === "Progress" ? "orange" : "", }} onClick={() => changeStatus(x.taskid, "Progress")} >
                                  Progress
                                </button>
                        
                                <button style={{ backgroundColor: status === "Done" ? "rgb(3, 180, 62)" : "", }} onClick={() =>  changeStatus(x.taskid, "Done")} >
                                  Done
                                </button>
                              </div>


                              <p className={mystyle.fileatach}> Attach Task File </p>
                               
                               <div className={mystyle.filewrapper}>
                              

                               <label htmlFor="fileUpload" className={mystyle.fileupload} > Choose File </label>

                               <input id="fileUpload" className={mystyle.fileinput} type="file"  onChange={(e) => FileChange(e, x.taskid)} />

                                <p className={ mystyle.filename } >
                                   {taskfile[x.taskid] ? taskfile[x.taskid].name : "No file selected"}
                                 </p>
                               </div>
           
                            
                        </div>
                       )
                       

                    })
                }
               
              </div> 


                <div className={mystyle.footersection}>
                    <div className={mystyle.footerp}><p>© 2024 TaskTracker Pro System. All rights reserved.</p></div>
    
                    <div className={mystyle.footer}>
                        <div className={mystyle.footerpara}><a href="">Help Center</a></div>
                        <div className={mystyle.footerpara}><a href="">System Status</a></div>
                        <div className={mystyle.footerpara}><a href="">Security</a></div>
                    </div>
                </div>

            </div>

               

          </div>
         </div>
        </>
    )
  
}
export default Usermainpage;