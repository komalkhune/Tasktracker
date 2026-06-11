
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import AddEmployee from './Pages/AddEmployee/AddEmployee';
import Employeelist from './Pages/Employeelist/Employeelist';
import Homepage from './Pages/Homepage/Homepage';
import Hrlogin from './Pages/Hrlogin/Hrlogin';
import Employeelogin from './Pages/Employeelogin/Employeelogin';
import Hrdashboard from './Pages/Dashboard/Hrdashboard';
import Mainpage from './Pages/Mainpage/Mainpage';
import Createteam from './Pages/Createteam/Createteam';
import Teams from './Pages/Createteam/Teams';
import Hrsignup from './Pages/Hrlogin/Hrsignup';
import Employeesignup from './Pages/Employeelogin/Employeesignup';
import { actions } from './Pages/Store.js/Store';
import { useDispatch } from 'react-redux';
import Taskassign from './Pages/Task/Taskassign';
import Taskstatus from './Pages/Task/Taskstatus';
import Userdashboard from './Pages/Dashboard/Userdashboard';
import Usermainpage from './Pages/Mainpage/Usermainpage';
import Teamsuser from './Pages/Createteam/Teamsuser';
import Teamsignup from './Pages/Employeelogin/Teamsignup';
import Teamlogin from './Pages/Employeelogin/Teamlogin';



const myRouter=createBrowserRouter([

  {
    path:"https://komalkhune.github.io/Tasktracker/",
    element:<Homepage/>
  },
  {
    path:"/hrsignup",
    element:<Hrsignup/>
  },
  {
    path:"/employeesignup",
    element:<Employeesignup/>
  },
  {
    path:"/hrlogin",
    element:<Hrlogin/>
  },
   {
    path:"/employeelogin",
    element:<Employeelogin/>
  },
   
  {
    path:"/hrdashboard",
    element:<Hrdashboard/>,
    children:[
       {
        index: true,   //  default page
        element: <Mainpage />
      },
      {
        path:"mainpage",
        element:<Mainpage/>
      },
      {
        path:"addemployee",
        element:<AddEmployee/>
      },

    {
    path:"employeelist",
    element:<Employeelist/>
   },
    {
    path:"createteam",
    element:<Createteam/>
   },
    {
    path:"teams",
    element:<Teams/>
   },
   {
    path:"taskassign",
    element:<Taskassign/>
   },
   {
    path:"taskstatus",
    element:<Taskstatus/>
   },
    ]
  },

   {
    path:"/userdashboard",
    element:<Userdashboard/>,
    children:[
       {
        index: true,   //  default page
        element: <Teamsignup />
      },
      // {
      //   path:"Teamresister",
      //   element:<Teamresister/>
      // },
      {
        path:"teamsignup",
        element:<Teamsignup/>
      },
      {
        path:"teamlogin",
        element:<Teamlogin/>
      },
      {
        path:"usermainpage",
        element:<Usermainpage/>
      },
      {
    path:"teamsuser",
    element:<Teamsuser/>
   },
      {
        path:"taskstatus",
        element:<Taskstatus/>
      },
    ]}
  
  
  
  
])

function App() {


  const dispatcher=useDispatch();


   let hrsignupdata = JSON.parse(localStorage.getItem("hrsignupdata")) || [];
  
    console.log("hrsignupdata", hrsignupdata)
  
    dispatcher(actions.hrlocalsidata(hrsignupdata));



    let usersignupdata = JSON.parse(localStorage.getItem("usersignupdata")) || [];
  
    console.log("usersignupdata", usersignupdata)
  
    dispatcher(actions.userlocalsidata(usersignupdata));



    let teamlogin = JSON.parse(localStorage.getItem("teamlogin")) || [];
  
    console.log("teamlogin", teamlogin)
  
    dispatcher(actions.teamlocalsidata(teamlogin));





     let localemdata = JSON.parse(localStorage.getItem("edata")) || [];

  console.log("localemdata", localemdata)

  dispatcher(actions.loempdata(localemdata));




   let localtmdata = JSON.parse(localStorage.getItem("tdata")) || [];

   console.log("localtmdata", localtmdata)

  dispatcher(actions.lotmpdata(localtmdata));



   let localtaskdata = JSON.parse(localStorage.getItem("taskdata")) || [];

   console.log("localtaskdata", localtaskdata)

  dispatcher(actions.lotaskdata(localtaskdata));  



   let taskstatus = JSON.parse(localStorage.getItem("taskstatus")) || [];

   console.log("taskstatus", taskstatus)

  dispatcher(actions.lotaskstatus(taskstatus));  


   let taskfile = JSON.parse(localStorage.getItem("taskfile")) || [];

   console.log("taskfile", taskfile)

  dispatcher(actions.lotaskfile(taskfile));  
  






  return (
    <div className="App">

    <RouterProvider router={myRouter}/> 
      

    </div>
  );
}

export default App;
