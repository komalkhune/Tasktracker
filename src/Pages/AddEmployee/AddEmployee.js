import { useState } from "react"
import { actions } from "../Store.js/Store";
import style from "./AddEmployee.module.css"
import axios from "axios";
import { useDispatch } from "react-redux";

const AddEmployee=()=>{

   
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [number, setNumber]=useState("");
    const [address, setAddress]=useState("");
    const [salary, setrSalary]=useState("");
    const [gender, setGender]=useState("");
    const [department, setDepartment]=useState("");


    const [error, setError]=useState(false);
    const [success, setSuccess]=useState(false);

    const dispatcher=useDispatch();


  

    let edata={
        uid:new Date().getTime(), 
        username:username,
        email:email,
        number:Number(number),
        address:address,
        salary:salary,
        department:department,
        gender:gender,
        // status:"1"
    }



    const savedata=()=>{
        if ( username === "" || email === "" || number === "" || address === "" || salary === "" || department === "" || gender === "") {
       setError(true);
      }
      else
        {
         dispatcher(actions.emdata(edata));
         setSuccess(true);

         setUsername("");
         setEmail("");
         setNumber("");
         setAddress("");
         setrSalary("");
         setGender("");
         setDepartment("");


      }
    }

    const close=()=>{
        setError(false);
        setSuccess(false)
    }



    
    return(
        <div className={style.container}>

    {error && (
        <div className={style.alertError}>
            <p>Please fill all field</p>
            <button className={style.closeBtn} onClick={close} >Close </button>
        </div>
    )}

    {success && (
        <div className={style.alertSuccess}>
            <p>Data Add Successfully</p>
            <button className={style.closeBtn} onClick={close} > Close </button>
        </div>
    )}

    {/* <input className={style.input} type="number" placeholder="Enter Id" onChange={(e) => setId(e.target.value)} /> */}

    <input className={style.input} type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />

    <input className={style.input} type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

    <input className={style.input} type="text" placeholder="Enter mobile no" onChange={(e) => setNumber(e.target.value)}/>

    <input className={style.input} type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}/>

    <input className={style.input} type="text" placeholder="Enter Salary" onChange={(e) => setrSalary(e.target.value)}/>

    
      <select className={style.input}  onChange={(e) => setDepartment(e.target.value)}>
        <option value="">Select Department</option>
        <option value="Data Science">Data Science</option>
        <option value="Developer">Developer</option>
        <option value="Testing">Testing</option>
        <option value="AI ML">AI ML</option>
        <option value="Robotics">Robotics</option>
      </select>
                  

    <div className={style.genderBox}>
        <label>Gender :</label>

        <label className={style.radioLabel}>
            <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}/>
            Male
        </label>

        <label className={style.radioLabel}>
            <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
            Female
        </label>
    </div>

    <button className={style.button} onClick={savedata}> Save </button>


</div>
    )
}

export default AddEmployee;