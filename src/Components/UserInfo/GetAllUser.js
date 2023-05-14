// import React, { Component } from 'react';  
// import axios from 'axios';  
//  import Table from './Table';  
  
// export default class Studentlist extends Component {  
//   constructor(props) {  
//       super(props);  
//       this.state = {business: []};  
//     }  
//     componentDidMount(){  
    
//       axios.get('https://localhost:7250/api/User/GetUsers')  
//         .then(response => {  
//           this.setState({ business: response.data });  
          
  
//         })  
//         .catch(function (error) {  
//           console.log(error);  
//         })  
//     }  
      
//     tabRow(){  
//       return this.state.business.map(function(object, i){  
//          return <Table obj={object} key={i} />;  
//       });  
//     }  
  
//     render() {  
//       return (  
//         <div>  
//           <h4 align="center">User List</h4>  
//           <table className="table table-striped" style={{ marginTop: 10 }}>  
//             <thead>  
//               <tr>  
//                 <th>First Name</th>  
//                 <th>Last Name</th>  
//                 <th>User Name</th>  
//                 <th>Password</th>  
//                 <th>Enrolment Date</th>  
//                 <th colSpan="4">Action</th>  
//               </tr>  
//             </thead>  
//             <tbody>  
//              { this.tabRow() }   
//             </tbody>  
//           </table>  
//         </div>  
//       );  
//     }  
//   }  

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7250/api/User/GetUsers')
      .then(response => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.username}</p>
          <p>{user.password}</p>
          <p>{user.enrollmentDate}</p>         
        </div>
      ))}
    </div>
  );
}

export default UserList;
