 import { useSelector } from "react-redux";
import mystyle from "./Employeelogin.module.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import { FaLock, FaUser } from "react-icons/fa";

const Teamlogin=()=>{


    const teamlogin = useSelector((state)=> state.signingData.tresidata)



    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);
     const [erroremail, setErroremail]=useState(false);
    const [errorpass, setErrorpass]=useState(false);

    
     const navigate = useNavigate();


    const login=()=>{

    const teamfound = teamlogin.find((item)=>{return(item.email===username && item.password===password)})
    

    console.log("teamfound",teamfound)

     const teamnotfound = teamlogin.find((item)=>{return(item.email != username && item.password != password)})

      const teamemailfound = teamlogin.find((item)=>{return(item.email != username)})

    console.log("teamemailfound",teamemailfound)


      const teampassfound = teamlogin.find((item)=>{return(item.password != password)})

    if(teamfound){
        navigate("/userdashboard/usermainpage");
    }else if(username === "" || password === ""){
         setError(true);
    }else if(teamnotfound){
      setErrorvalid(true);
    }else if(teamemailfound){
        setErroremail(true);
    }else if(teampassfound){
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

                <h2 className={mystyle.title}>Team login</h2>

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

export default Teamlogin;