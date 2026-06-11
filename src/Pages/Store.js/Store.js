import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskReducer=createSlice({
    name:"myReducer",
    initialState: {

     hollData:{
        employeedata:[],
        teamdata:[]

    },

     signingData:{
        hrsignupdata:[],
        stusignupdata:[],
         tresidata:[]
    },

    task:[],
    taskStatus: {},
    taskfile:{},

    teamid:{}

    //  sidebarOpen: false

  

        
        
    },

    reducers:{


      hrsiginfo(state, action){
        state.signingData.hrsignupdata=[...state.signingData.hrsignupdata,(action.payload)]
      },

        hrlocalsidata(state, action){
        state.signingData.hrsignupdata=action.payload;
      },



       stusiginfo(state, action){
        state.signingData.stusignupdata=[...state.signingData.stusignupdata,(action.payload)]
      },

          userlocalsidata(state, action){
        state.signingData.stusignupdata=action.payload;
      },



    


      // loempdata(state, action) {state.hollData.employeedata = [ ...state.hollData.employeedata, ...action.payload ];},

      loempdata(state, action){
        state.hollData.employeedata=action.payload;
      },
      

         emdata(state, action){
        state.hollData.employeedata=[...state.hollData.employeedata,( action.payload)]; 
      },

       modifyData:(state, action)=>{
        return {...state, hollData:{ ...state.hollData,employeedata: state.hollData.employeedata.map((emp) => emp.uid === action.payload.uid ? action.payload : emp)}
        }  
      },

      //  axiosemdata:(state, action)=>{
      //   return {...state, hollData:{ ...state.hollData,employeedata: state.hollData.employeedata.map((emp) => emp.uid === action.payload.uid ? action.payload : emp)}
      //   }  
      // },

      deletdata:(state, action)=>{
          return {...state, hollData:{...state.hollData,employeedata: state.hollData.employeedata.filter((emp) => emp.uid !== action.payload)}
        };
      }, 




      ftdata(state, action){
        state.hollData.teamdata=[...state.hollData.teamdata,(action.payload)];
      },
       
       lotmpdata(state, action){
        state.hollData.teamdata=action.payload;
      },

      // ftaxiosdata(state,action){
      //    state.hollData.teamdata=[...state.hollData.teamdata,(action.payload)];
      // },

      modifyteamData:(state,action)=>{
         return {...state, hollData:{ ...state.hollData,teamdata: state.hollData.teamdata.map((team) => team.tid === action.payload.tid ? action.payload : team)}
        } 
      },

      deletteamdata:(state, action)=>{
          return {...state, hollData:{...state.hollData,teamdata: state.hollData.teamdata.filter((team) => team.tid !== action.payload)}
        };
      },



   openSidebar:(state)=>{
      state.open=true
    },

    closeSidebar:(state)=>{
      state.open=false
    },


    assigntask: (state, action) => {
     state.task = [...state.task, action.payload];
    },

    lotaskdata:(state, action)=>{
      state.task=action.payload;
    },


    taskstatus:(state, action)=>{
       return { ...state, taskStatus: { ...state.taskStatus, ...action.payload, },}
       },


       lotaskstatus:(state, action)=>{
         state.taskStatus=action.payload;
       },

       taskFile:(state, action)=>{
       return {...state, taskfile:{...state.taskfile, ...action.payload} }
       },

       lotaskfile:(state, action)=>{
        state.taskfile=action.payload;
       },


       teamid:(state,action)=>{
        state.teamid=action.payload;
       },

       tresidata(state, action){
        state.signingData.tresidata=[...state.signingData.tresidata,(action.payload)]
      },

        teamlocalsidata(state, action){
        state.signingData.tresidata=action.payload;
      },


    




    }
})

const store=configureStore({reducer:taskReducer.reducer})

export default store;

export const actions=taskReducer.actions;