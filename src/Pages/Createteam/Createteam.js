import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import mystyle from "./Createteam.module.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store.js/Store";
import { FaArrowRight } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
// import Select from "react-select/base";
import Select from "react-select";

const Createteam=()=>{


   const emdata=useSelector((state)=> state.hollData.employeedata)
    const etdata=useSelector((state)=> state.hollData.teamdata)
    

     const dispatcher=useDispatch();


    const [edata, setEdata]=useState("")

    const [teamname, setTeamname]=useState("");
    const [teamdepartment, setteamDepartment]=useState("");  
    const [eid, seteId]=useState([]);  

    const [teamleadereid, setteamleadereId]=useState("");  


    const [teamdata, setTdata]=useState([])

    const [error, setError]=useState(false)
    const [show, setShow]=useState(false)
    const [mshow, setmShow]=useState(false)
    const [addentlead, setAddentlead]=useState(false)
    const [leader, setLeader]=useState(false)






   const maketeam = () => {

  const matchid = emdata.filter(
  (item) => eid.includes(item.uid)
);

  console.log("matchid",matchid);


  if (teamname === "" || teamdepartment === "") {
    setError(true);
    return;
  }

  if (eid !== "" && !matchid) {
  alert("This Employee ID not found");
  console.log("Employee ID not found");
  return;
}

  
    console.log(typeof eid);
  
  const teamavailable=etdata.find((t)=> t.teamname === teamname);
  console.log("teamavailable",teamavailable)



  if(teamavailable){
  
    // const memberpresent=Array.isArray(teamavailable.eid) ? teamavailable.eid: [teamavailable.eid];

    const memberpresent = teamavailable.eid || [];

    // console.log("memberpresent", memberpresent)

    console.log("eid:", eid);
console.log("memberpresent:", memberpresent);

console.log("eid[0]:", eid?.[0]);
console.log("memberpresent[0]:", memberpresent?.[0]);

console.log(typeof eid?.[0]);
console.log(typeof memberpresent?.[0]);


    // console.log(typeof memberpresent);

const existing = memberpresent.map(String);
const selected = eid.map(String);


const hasDuplicate = selected.some((id) =>
   existing.includes(String(id))
);
 
    console.log("hasDuplicate", hasDuplicate)


if (hasDuplicate) {
  alert("This Employee ID already exists in team");
  return;
}


const isLeaderSelected = eid
  .map(String)
  .includes(String(teamleadereid));

if (teamleadereid !== "" && isLeaderSelected) {
  alert("This is chosen for leader, choose other");
  return;
}

      // const addmember = [...memberpresent, eid];


       const addmember = [...memberpresent, ...eid];

     if (addmember.length > 4) {
    alert("Only 4 members allowed");
    return;
    }
if (teamleadereid !== "") {

  const leadereidmatch = addmember
    .map(String)
    .includes(String(teamleadereid));

  // if matched show alert
  if (leadereidmatch) {
    alert("This is Team Member");
    return;
  }
}

// continue process if not matched
const updatedTeam = {
  ...teamavailable,
  eid: addmember,
  teamlead:teamleadereid
};

console.log("updatedTeam", updatedTeam)

dispatcher(actions.modifyteamData(updatedTeam));


     setAddentlead(true)

  // }else{
  //    alert("Teamleader Id not match");
  //   return;
  // }

     

       }else{

        const tdata = {
          tid:new Date().getTime(), 
          teamname: teamname,
          teamdepartment: teamdepartment,
          eid: eid,  
           teamlead:teamleadereid
        };
// only check if leader id entered
if (teamleadereid !== "") {

  const leadereidmatch = eid
    .map(String)
    .includes(String(teamleadereid));

  // if leader id exists in member list
  if (leadereidmatch) {
    alert("Choose for team member");
    return;
  }
}

// continue process
dispatcher(actions.ftdata(tdata));

// if leader id empty
if (teamleadereid === "") {
  setShow(true);
} else {
  setAddentlead(true);
}




        };






      }


      const close=()=>{
        setError(false);
        setmShow(false)             
        setShow(false)
      }
     


      const options = emdata.map((item) => ({
        value: item.uid,
        label: item.uid,
      }));


  
    return(
        <div className={mystyle.teamcontainer}>

          <div className={mystyle.teamform}>

            <h2>Create Team <RiTeamFill /></h2>

            {error &&
            <div className={mystyle.emptyinp}>
                <p>Please Enter Valid Data</p>
                 <button className={mystyle.closeBtn} onClick={close} ><IoMdCloseCircleOutline /> </button>

            </div>
            }

             {show &&
            <div className={mystyle.emptyinp}>
                <p>New Team create successfuly</p>
                 <button className={mystyle.closeBtn} onClick={close} ><IoMdCloseCircleOutline /> </button>
            </div>
            }

            {addentlead &&
            <div className={mystyle.emptyinp}>
                <p> Teamleader id not found</p>
                 <button className={mystyle.closeBtn} onClick={close} ><IoMdCloseCircleOutline /> </button>
            </div>
            }

            {leader &&
            <div className={mystyle.emptyinp}>
                <p>Make Team Leader Successfully</p>
                 <button className={mystyle.closeBtn} onClick={close} ><IoMdCloseCircleOutline /> </button>
            </div>
            }

            {mshow &&
            <div className={mystyle.emptyinp}>
              <p>Add member Successfully</p>
               <button className={mystyle.closeBtn} onClick={close} ><IoMdCloseCircleOutline /> </button>
            </div>
            }
             
             <div className={mystyle.form}>
                <input className={mystyle.inp} type="text"  placeholder="Enter Team Name" onChange={(e)=>setTeamname(e.target.value)} /><br/><br/>

                <select className={mystyle.inp}  onChange={(e) => setteamDepartment(e.target.value)}>
                   <option value="">Select Department</option>
                   <option value="Data Science">Data Science</option>
                   <option value="Developer">Developer</option>
                   <option value="Testing">Testing</option>
                   <option value="AI ML">AI ML</option>
                   <option value="Robotics">Robotics</option>
               </select><br/><br/>

               {/* <input className={mystyle.inp} type="text" placeholder="Add employee id" onChange={(e)=>seteId(e.target.value)} /><br/><br/> */}

               {/* <select className={mystyle.inp} multiple onChange={(e)=>seteId(e.target.value)}>
                    <option value="">Select Team member ID</option>
                  
                    {etdata.map((item) => (
                      <option key={item.tid} value={item.tid}>
                        {item.tid}
                      </option>
                    ))}
                  </select><br/><br/>   */}


                  <Select className={mystyle.inp} options={options} isMulti placeholder="Select Team Member ID"  onChange={(selectedOptions) =>seteId(selectedOptions?.map((item) => item.value) || [])
  } /><br/><br/> 

                  

                     <select className={mystyle.inp} onChange={(e)=>setteamleadereId(e.target.value)}>
                    <option value="">Select Team Leader</option>
                  
                    {emdata.map((item) => (
                      <option key={item.uid} value={item.uid}>
                        {item.uid}
                      </option>
                    ))}
                  </select><br/><br/>

               {/* <input className={mystyle.inp} type="text" placeholder="Add Teamleaderid id" onChange={(e)=>setteamledereId(e.target.value)} /><br/><br/> */}


               <button className={mystyle.createbtn}  onClick={maketeam}>CreateTeam <FaArrowRight /></button>
             </div>

          </div> 



        </div>
    )
}
export default Createteam;