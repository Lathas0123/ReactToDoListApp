// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My First React App
//          </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';  
import GetAllUSer from './Components/UserInfo/GetAllUser'; 
// import Middleware from './Components/UserInfo/MiddleWare'; 
 
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import {Routes, Route, Switch, NavLink } from 'react-router-dom';

//  import { Switch, Route } from 'react-router-dom';
 import { Link } from 'react-router-dom';

import './App.css'; 
import './Components/Crud.css'

function App() {  
    return (  
      <Router>  
        <div className="container">  
          <nav className="navbar navbar-expand-lg navheader">  
            <div className="collapse navbar-collapse" >  
              <ul className="navbar-nav mr-auto">  
                <li className="nav-item">  
                  <Link to={'/Addstudent'} className="nav-link">Add User</Link>  
                </li>  
                <li className="nav-item">  
                <NavLink className="btn btn-light btn-outline-primary" to="/Home">
                Home
              </NavLink>
                 
                </li>  
              </ul>  
            </div>  
          </nav> <br />  

          <switch>
                    {/* <Route path='/Home' component={GetAllUSer}></Route> */}

                    <Routes>
        
        <Route path="/Home" element={<GetAllUSer />} />
         
      </Routes>
        </switch>
          
        </div>  
      </Router>  
    );  
  }  
    
  export default App; 

 
 
 
