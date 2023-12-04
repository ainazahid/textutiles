import './index.scss' ;
import './App.css';           
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light');
   const [alert , setAlert] = useState(null);
  //  const [bgClr, setBgClr] = useState("white");
  // const AnnualHandler = () => {
  //   setBgClr("green");
  //   document.body.style.backgroundColor = 'Yellow'
  // };
  const showAlert=(message , type)=>{
setAlert({
  msg: message,
  type: type,
})
setTimeout(()=>{
  setAlert(null);
 } , 1500);

}
const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
 document.body.classList.remove('bg-success')

}
    const toggleMode =(cls) =>{
      removeBodyClasses();
      console.log(cls)
      document.body.classList.add('bg-'+cls)
    if(mode ==='light' ) {
      setMode('dark');
      document.body.style.backgroundColor = 'grey ';
    showAlert("Dark mode has been enabled" , "success");
    }
    else{
       setMode('light');
        document.body.style.backgroundColor = 'white';
         showAlert("Light mode has been enabled" , "success");
    }
     }
    
return (
<>
<Router>
{/* props is used to reuse the app bar by changing varible */}
    <Navbar title="textuails" about='About'   mode={mode} toggleMode={toggleMode}/>
 {/* //bgClr={bgClr} AnnualHandler={AnnualHandler} */}
      <Alert alert ={alert}/>
{/* <Navbar/> */}

     <div className="container my-3">
     <Routes>
          <Route path='/about' element={<About mode={mode}/>} />
          <Route path='/' element={<Textform showAlert= {showAlert}heading="Try Textuitls - Word Counter, Character Counter, Remove extraspaces " mode={mode}/>} />                
      </Routes>
    </div>
    </Router>
{/* <About/> */}
</>

);
}

export default App;
