import { useState } from "react";
import mystyle from "./Employeesignup.module.css"
import { Link, useNavigate } from "react-router";
import { FaLock, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Store.js/Store";

const Teamsignup=()=>{

       const teamlogin = useSelector((state)=> state.signingData.tresidata)

     const dispatcher=useDispatch();
     const navigate = useNavigate();


    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);


    
     


    const signup=()=>{

        let teaminfo={
            email:username,
            password:password
        }


       const teamfound = teamlogin.find((item)=>{return(item.email===username)})

      if(teamfound){
          setErrorvalid(true);
      }else if(username === "" || password === ""){
            setError(true);
        }else{
            dispatcher(actions.tresidata(teaminfo))

         navigate("/userdashboard/usermainpage");
        }

    
    
    }




    const close=()=>{
        setError(false)
        setErrorvalid(false);
    }

    return(
        <>

         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>Team Signup</h2>

                {error && (
                <div className={mystyle.errorbox}>
                  <p> Please Enter Correct Data</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

              {errorvalid && (
                <div className={mystyle.errorbox}>
                  <p>This email Already signup try with new email</p>
                  <button className={mystyle.closebtn} onClick={close}> Close </button>
                </div>
              )}

                <div className={mystyle.inputgroup}> <FaUser className={mystyle.icon} />
                    <input className={mystyle.inputfield} type="text" placeholder="Enter team username" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
  
                <div className={mystyle.inputgroup}> <FaLock className={mystyle.icon} />
                    <input className={mystyle.inputfield} type="password" placeholder="Enter team Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button className={mystyle.loginbtn} onClick={signup}>signup</button>


                <p className={mystyle.navigatebtn}>Already have an account? <Link to="/userdashboard/usermainpage">Login</Link> </p>


                
  

            </div>
        </div>
        
        </>
    )
}

export default Teamsignup;