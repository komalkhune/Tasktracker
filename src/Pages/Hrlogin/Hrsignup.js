import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import mystyle from "./Hrsignup.module.css"
import { FaLock, FaUser } from "react-icons/fa";
import { actions } from "../Store.js/Store";

const Hrsignup=()=>{ 

    const hrinfo = useSelector((state)=> state.signingData.hrsignupdata)


     const dispatcher=useDispatch();
     const Navigate = useNavigate();




    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const [error, setError]=useState(false);
    const [errorvalid, setErrorvalid]=useState(false);

    
    


    const signup=()=>{

        let hrsiginfo={
            email:username,
            password:password
        }


        const hrfound = hrinfo.find((item)=>{return(item.email===username)})

        if(hrfound){
           setErrorvalid(true);
           return
        }else if(username === "" || password === ""){
            setError(true);
        }else{
            dispatcher(actions.hrsiginfo(hrsiginfo))

              Navigate("/hrlogin");
        }

       



   
    }


    const close=()=>{
        setError(false)
        setErrorvalid(false)
    }

   



    return(

         <div className={mystyle.logincontainer}>
            <div className={mystyle.loginbox}>

                <h2 className={mystyle.title}>HR signup</h2>

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
                    <input className={mystyle.inputfield} type="text" placeholder="Enter Email" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
  
                <div className={mystyle.inputgroup}> <FaLock className={mystyle.icon} />
                    <input className={mystyle.inputfield} type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button className={mystyle.loginbtn} onClick={signup}>Signup</button>


                <p className={mystyle.navigatebtn}>Already have an account? <Link to="/hrlogin">Login</Link> </p>



                
  

            </div>
        </div>

        


    )
}

export default Hrsignup;