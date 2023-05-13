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


import React from "react";

 class Application extends React.Component {
  render() {
    return <h1><span>Hello World !!!!</span>GeeksForGeeks</h1>;
  }
}

class Sample extends React.Component {
  render() {
    return <h1>A Computer Science Portal For Geeks</h1>;
  }
}
 
class Test extends React.Component{
  render()
  {
    return <h5> My first React Application</h5>
  }
}
class App extends React.Component {
  render() {
    // return <Sample />;
    return <Test />;
  }
}
export default App;

