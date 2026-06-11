 import { useSelector } from "react-redux";
import mystyle from "./Employeelogin.module.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaLock, FaUser } from "react-icons/fa";

const Employeelogin=()=>{


   const stuinfo = useSelector((state)=>state.signingData.stusignupdata)


    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);
     const [erroremail, setErroremail]=useState(false);
    const [errorpass, setErrorpass]=useState(false);

    
     const Navigate = useNavigate();


    const login=()=>{

    const stufound = stuinfo.find((item)=>{return(item.email===username && item.password===password)})

     const stunotfound = stuinfo.find((item)=>{return(item.email != username && item.password != password)})

      const stuemailfound = stuinfo.find((item)=>{return(item.email != username)})

      const stupassfound = stuinfo.find((item)=>{return(item.password != password)})

    if(stufound){
        Navigate("/Userdashboard");
    }else if(username === "" || password === ""){
         setError(true);
    }else if(stunotfound){
      setErrorvalid(true);
    }else if(stuemailfound){
        setErroremail(true);
    }else if(stupassfound){
         setErrorpass(true);
    }

  }


    const close=()=>{
        setError(false)
         setErrorvalid(false);
         setErroremail(false);
         setErrorpass(false);
    }


    return(
        
         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Student login</h2>

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

                <div className={mystyle.inputgroup}> <FaUser className={mystyle.icon} />
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
  
                <div className={mystyle.inputgroup}> <FaLock className={mystyle.icon} />
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button className={mystyle.loginbtn} onClick={login}>Login</button>

                
  

            </div>
        </div>

    )
}

export default Employeelogin;