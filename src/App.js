//hooks:which help us to write feature of class base component in function based.
//some hooks are useState:use to make changes in state.useEffect work as componenentdidmount use to make change after some function run(somewhat like settimeout it will work after certain function finished,useContext:use for context api(when there is component inside component inside componenet we need to drill thus it make this fucntions globally available)),useRef:return mutable reference object holder type.
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
const App=()=>{
  const pagesize=15;
  const [progress,setprogress]=useState(0)
  const apikey=process.env.REACT_APP_NEWS_API
  const setProgress=(prog)=>{
    setprogress(prog)
  }
    return (
      <>
      <Router>
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Navbar/>
        <Routes>
           <Route exact path="/" element={<News  setProgress={setProgress} apikey={apikey} key="general" pagesize={pagesize} country="in" category="general"/>}></Route>
          {/* <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey}key="business" pagesize={pagesize} country="in" category="business" />}></Route>
          <Route exact path="entertainment" element={<News setProgress={setProgress} apikey={apikey}key="entertainment" pagesize={pagesize} country="in" category="entertainment" />}></Route>
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey}key="general" pagesize={pagesize} country="in" category="general" />}></Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey}key="health" pagesize={pagesize} country="in" category="health" />}></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey}key="science" pagesize={pagesize} country="in" category="science" />}></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}key="sports" pagesize={pagesize} country="in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey}key="technology" pagesize={pagesize} country="in" category="technology" />}></Route> */} 
          
          {/* <News setProgress={setprogress} apikey={apikey}pagesize={pagesize} country="in" category="sports" /> */}
        </Routes>
      </div>
      </Router>
      </>
    )
}
export default App;

