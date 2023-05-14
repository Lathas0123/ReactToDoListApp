import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteStudent= () =>{  
     axios.delete('http://localhost:7250/api/User/DeleteUser?Id='+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.FirstName}  
          </td>  
          <td>  
            {this.props.obj.LastName}  
          </td>  
          <td>  
            {this.props.obj.Username}  
          </td>  
          <td>  
            {this.props.obj.Password}  
          </td>  
          <td>  
            {this.props.obj.EnrollmentDate}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table; 