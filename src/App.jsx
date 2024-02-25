
//import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import AppLayout from "./pages/AppLayout";
import ScheduleEvents from "./components/ScheduleEvents";
//import { useState } from "react";
import UpComingEvents from "./components/UpComingEvents";

function App() {
  // const[shEvents,SetShEvents]=useState({});
  // const[isLoading,SetIsLoading]=UseSate(false);

  // useEffect(function(){
  //   async function fetchShEvents(){
  //     try{
  //     const res = await fetch(``);
  //     const data=await res.json();
  //     SetShEvents(data);
  //     }
  //     catch{
  //       alert("error");
  //     }
  //     finally{
  //       SetIsLoading(false);
  //     }
  //   }
  //   fetchShEvents();
  // },[]);

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/applayout" element={<AppLayout/>}>
      <Route index element={<ScheduleEvents/>}/>
      <Route path="ScheduledEvents" element={<ScheduleEvents/>}/>
      <Route path="UpcomingEvents" element={<UpComingEvents/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
     
    
     
    
  )
}

export default App;
