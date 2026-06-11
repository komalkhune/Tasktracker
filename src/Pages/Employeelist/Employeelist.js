
import mystyle from "./Employeelist.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../Store.js/Store"

const Employeelist=()=>{

   const navigate=useNavigate();

    const dispatcher=useDispatch()

    const emdata=useSelector((state)=> state.hollData.employeedata)


    const [data, setData]=useState([])
     const [show, setShow] = useState(false);
    const [editData, setEditData] = useState({});

   

    // console.log(setEditData)

    const [error, setError]=useState(false);

//     useEffect(() => {

//     axios.get( "https://6968c1a069178471522b731d.mockapi.io/DDemod" )
//     .then((success) => {
//         console.log(success.data);
//         setData(success.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// }, []);



     const updateData = (item) => { 
        setEditData(item);
        setShow(true);
    };
    

    const changevalue = (e) => {
    setEditData({...editData, [e.target.name]: e.target.value }); 
    }; 

    const savechanges = () => {

       if (editData.id === "" || editData.username === "" || editData.email === "" || editData.number === "" || editData.address === "" || editData.salary === "" || editData.department === "" || editData.gender === "" ) {
       setError(true); 
      }else{

        dispatcher(actions.modifyData(editData))
        setError(false);
        setShow(false);

        //  axios.put(`https://6968c1a069178471522b731d.mockapi.io/DDemod/${editData.id}`, editData )
        // .then((success) => {
        // //  console.log(success.data);

        //     const updatedData = data.map((item) =>
        //         item.id === editData.id ? success.data : item );

        //     setData(updatedData);

        //     setShow(false);

        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }
      }



        const deleteData = (uid) => { 

          dispatcher(actions.deletdata(uid))
          //  axios.put(`https://6968c1a069178471522b731d.mockapi.io/DDemod/${id}`, {status:0} )
          //  .then((success)=>{
          //     // console.log(success)
          //      const hideData=data.filter((item)=> item.id !== id);
      
          //       setData(hideData);


          //  }).catch((error)=>{
          //   console.log(error)
          //  })
           
        
    };
 

     const close=()=>{
      setError(false)
    }


    // const Createteam=()=>{
    //   navigate("/hrdashboard/createteam",{state:{editData}})
    // }



    return(
        <div className={mystyle.managercontainer}>

          <h2>Students list</h2>

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



              
            <input className={mystyle.inputfield} name="id" value={editData.uid || ""} onChange={changevalue} placeholder="id"/>
            <input className={mystyle.inputfield} name="username" value={editData.username || ""} onChange={changevalue} placeholder="username" />
            <input className={mystyle.inputfield} name="email" value={editData.email || ""} onChange={changevalue} placeholder="email"/>
            <input className={mystyle.inputfield} name="number" value={editData.number || ""} onChange={changevalue} placeholder="number"/>
            <input className={mystyle.inputfield} name="address" value={editData.address || ""} onChange={changevalue} placeholder="address"/>
            <input className={mystyle.inputfield} name="salary" value={editData.salary || ""} onChange={changevalue} placeholder="salary"/>

            <select className={mystyle.inputfield} name="department" value={editData.department || ""}  onChange={changevalue} placeholder="Department">
        <option value="">Select Department</option>
        <option value="Data Science">Data Science</option>
        <option value="Developer">Developer</option>
        <option value="Testing">Testing</option>
        <option value="AI ML">AI ML</option>
        <option value="Robotics">Robotics</option>
      </select>

                <div className={mystyle.radio}>
                  <label className={mystyle.lable}>Gender :
                
                    <input type="radio" name="gender" value="Male" checked={editData.gender === "Male"} onChange={changevalue} /> Male
                
                    <input type="radio" name="gender" value="Female" checked={editData.gender === "Female"} onChange={changevalue} /> Female
                
                  </label>
                </div>


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
                  emdata.map((x)=>(
                    <div  key={x.uid} className={mystyle.emdata}>

                        <p><strong>EmployeeID:</strong> {x.uid}</p>
                        <p><strong>Name:</strong> {x.username}</p>
                        <p><strong>Email:</strong> {x.email}</p>
                        <p><strong>Mobile no. :</strong> {x.number}</p>
                        <p><strong>Address:</strong> {x.address}</p>
                        <p><strong>Salary:</strong> {x.salary}</p>
                        <p><strong>Role:</strong> {x.department}</p>
                        <p><strong>Gender:</strong> {x.gender}</p>

                        <button onClick={() => updateData(x)}>Update</button>
                        <button onClick={() => deleteData(x.uid)}>Delete</button>
                        
                    </div>
                  ))
                }
                {/* <button onClick={Createteam}>CreateTeam</button> */}
            </div>


        </div>


    )
}

export default Employeelist;