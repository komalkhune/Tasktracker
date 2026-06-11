import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import mystyle from "./Teams.module.css"
import { actions } from "../Store.js/Store"
import Select from "react-select";

const Teams=()=>{


    const emdata=useSelector((state)=> state.hollData.employeedata)
    const etdata=useSelector((state)=> state.hollData.teamdata)

    console.log("emdata")
    console.log(emdata)
    console.log("etdata", etdata)

    const dispatcher=useDispatch();

    const [editteam, setEditteam]=useState({});

    const [show, setShow]=useState(false)
    const [error, setError]=useState(false)

    console.log("updatedatatatata", editteam)



    const updateData = (item) => { 
        setEditteam(item);
        setShow(true);
    };
    

    // const changevalue = (e) => {
    // setEditteam({...editteam, [e.target.name]: e.target.value }); 
    // }; 

  const changevalue = (selectedOptions, actionMeta) => {
    setEditteam({
        ...editteam,
        [actionMeta.name]: selectedOptions
            ? selectedOptions.map((item) => item.value)
            : []
    });
};


    const savechanges = () => {
    
        if ( editteam.teamname === "" || editteam.teamdepartment === "" || editteam.eid === ""  ) {
           setError(true); 
        }else{
    
            dispatcher(actions.modifyteamData(editteam))
            setError(false);
            setShow(false);
         }
    }


    const deleteData = (tid) => { 

        dispatcher(actions.deletteamdata(tid))  
    };
 

     const close=()=>{
      setError(false)
    }


    
      const options = etdata.map((item) => ({
        value: item.eid,
        label: item.eid,
      }));

      



    return(
        

        <div className={mystyle.managercontainer}>

          <div className={mystyle.updateform}>
            {show && (
            <div className={mystyle.overlay}>
              <div className={mystyle.popup}>
                <h3>Edit Employee Data</h3>
                
                {error && (
                  <div className={mystyle.errorbox}>
                    <p> Please fill all field</p>
                    <button className={mystyle.closebtn} onClick={close}> Close </button>
                  </div>
                )}


                <input className={mystyle.inputfield} type="text" placeholder="Enter Team id" name="tid" value={editteam.tid || ""} onChange={changevalue} /><br/><br/>
                 
                <input className={mystyle.inputfield} type="text" placeholder="Enter Team Name" name="teamname" value={editteam.teamname || ""} onChange={changevalue} /><br/><br/>

                <select className={mystyle.inputfield}  name="teamdepartment" value={editteam.teamdepartment || ""} onChange={changevalue}>
                   <option value="">Select Department</option>
                   <option value="Data Science">Data Science</option>
                   <option value="Developer">Developer</option>
                   <option value="Testing">Testing</option>
                   <option value="AI ML">AI ML</option>
                   <option value="Robotics">Robotics</option>
               </select><br/><br/>

               {/* <input className={mystyle.inputfield} type="text" placeholder="Enter employee id" name="eid" value={editteam.eid || ""} onChange={changevalue} /><br/><br/> */}

                {/* <Select className={mystyle.inputfield} options={options} isMulti placeholder="Select Team Member ID" name="eid" value={editteam.eid || ""}  onChange={changevalue} /><br/><br/>  */}

                {/* <Select className={mystyle.inputfield} options={options} isMulti placeholder="Select Team Member ID" name="eid" value={ editteam.eid.map((id) => ({  value: String(id),  label: String(id), })) } onChange={changevalue} /> */}



               <Select
    className={mystyle.inputfield}
    options={options}
    isMulti
    placeholder="Select Team Member ID"
    name="eid"
    value={editteam.eid.map((id) => ({
        value: String(id),
        label: String(id),
    }))}
    onChange={changevalue}
/>



                <div className={ mystyle.updateformbtn}>
                  <button onClick={savechanges}>Save</button>
                  <button onClick={() => setShow(false)}>Cancel</button>
                </div>

              </div>
          
            </div>
            )}
         </div> 





            
             <div className={mystyle.mapdata}>
                {
                    etdata.map((m)=>(
                         <div key={m.teamname} className={mystyle.emdata} >
                            <p><strong>Team Id:</strong> {m.tid}</p>
                            <p><strong>TeamName:</strong> {m.teamname}</p>
                            <p><strong>TeamDepartment:</strong> {m.teamdepartment}</p>
                             <p><strong>TeamMenbers:</strong></p>
                                 {/* <p>{m.eid}</p> */}
                             <p>  { Array.isArray(m.eid) ? m.eid.join(", ") : m.eid }</p>

                              <p className={mystyle.teamlead}><strong>Team_Leader: </strong></p>
                             <p>{m.teamlead}</p>
    

                             <button onClick={() => updateData(m)}>Update</button>
                             <button onClick={() => deleteData(m.tid)}>Delete</button>

                        </div>
                    ))
                }
               
             </div>

        </div>    
 
    )
}

export default Teams;