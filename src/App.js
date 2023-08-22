import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  // const [greenMode,setGreenMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
  }

  const removeClass= ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls) =>{

       removeClass();
       document.body.classList.add('bg-'+cls);
          if(cls==null && mode === 'light'){
            setMode('dark');
        document.body.style.backgroundColor='#02265a';
        document.body.style.color="white";
        showAlert("Dark mode Enabled","success");

        // setInterval(() => {
        //   document.title = "TextUtils is Awasome";
        // }, 1000);

        // setInterval(() => {
        //   document.title = "Install TextUtil Now!";
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color="black";
        showAlert("Light mode Enabled","success");
      }
  
  }


  //   const GreenToggleMode = () =>{
  //     if(greenMode === 'light'){
  //       setGreenMode('dark');
  //       document.body.style.backgroundColor='#172e0d';
  //       document.body.style.color="white";
  //       showAlert("Dark mode Enabled","success");
  //     }
  //     else{
  //       setGreenMode('light');
  //       document.body.style.backgroundColor='white';
  //       document.body.style.color="black";
  //       showAlert("Light mode Enabled","success");
  //     }
  // }
  return (
  
  //  <Router>
  <>
   <Navbar title= "TextUtils" aboutText="About_Text" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes> */}
          {/* <Route path='/about' element={<About />}/> */}
          {/* <Route path='/' element={ */}
          <TextForm heading="Enter Your Text here for Analysing" mode={mode} alert={showAlert}/>
          {/* }/> */}
    {/* </Routes> */}
   </div>
   </>
  //  </Router>
  );
  
}


export default App;
