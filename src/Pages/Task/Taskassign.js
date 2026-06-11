import { useState } from "react";
import mystyle from "./Taskassign.module.css"
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store.js/Store";

const Taskassign=()=>{

    const etdata=useSelector((state)=> state.hollData.teamdata)
    const taskdata=useSelector((state)=> state.task)

    


    const dispatcher=useDispatch();


    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");
    const [date, setDate]=useState("");
    const [level, setLevel]=useState("");
    const [tid, setTid]=useState("");

    const [error, setError]=useState(false);



const assigntask=()=>{
    
     let task={
       taskid:new Date().getTime(), 
        tdate:new Date().toLocaleDateString(),
        title:title,
         desc:desc,
         ldate:date,
         level:level,
         tid:tid
    } 

    console.log("task", task)

    if(title === "" || desc === "" || date === "" || level === "" || tid === "" ){
        setError(true)
    }else{
         dispatcher(actions.assigntask(task))
    }

}



    return(
        <>

        <div className={mystyle.taskcontent}>

            <div className={mystyle.tasksubcontent}>

            <h1>Create & Assign New Task</h1>

            <p>Fill in the details below to delegate responsibilities to your team.</p>

            <form className={mystyle.taskform}>

                { error &&
                  <div className={mystyle.alertError}>
                    <p>Please fill all Field</p>
                  </div>

                }

                <label>Task Title</label>
                <input className="form-control" type="text" placeholder="Enter Task" onChange={(e)=> setTitle(e.target.value)}/>

                <label>Task Description</label>
                <textarea className="form-control" type="text" placeholder="Task Description" onChange={(e) => setDesc(e.target.value)}></textarea>

                 <label>Deadline Date</label>
                <input className="form-control" type="date" onChange={(e)=> setDate(e.target.value)}/>

                <label>priority Level</label>
                <select className="form-control" onChange={(e)=> setLevel(e.target.value)}>
                    <option value=" ">Select priority</option>
                    <option value="LOW PRIORITY">Low priority</option>
                    <option value="MEDIUM PRIORITY">Medium priority</option>
                    <option value="HIGH PRIORITY">High priority</option>                 
                </select>

                 <label>Assigned Member or Team</label>
                 <select className="form-control"  onChange={(e)=> setTid(e.target.value)}>
                    <option value="">Select Team ID</option>
                  
                    {etdata.map((item) => (
                      <option key={item.tid} value={item.tid}>
                        {item.tid}
                      </option>
                    ))}
                  </select>
            
               <button type="button" className={mystyle.taskbtn} onClick={assigntask}>Assign Task</button>

               

            </form>

           </div>

        </div>


        
        </>
    )
}
export default Taskassign;