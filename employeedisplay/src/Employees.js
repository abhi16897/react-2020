import React from 'react';
import Employee from './Employee';
import axios from 'axios'
import './employees.css'

class Employees extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allemployees:[]
        }
    }
    componentWillMount(){   
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then((res)=>{
            console.log(res.data.data);
            this.setState({allemployees:res.data.data});
            console.log(this.state.allemployees)
        },(err)=>{
            console.log(err);
        });
    }
    displayEmployes(){
        return(
            <table style={{border:"1px solid black",position:"absolute",left:"25%",width:"50%",textAlign:"center"}}> 
                <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee Age</th>
                </tr>
                </thead>
              <tbody>
              {
                this.state.allemployees.map(emp=>{
                    return(
                    
                    <Employee key={emp.id}
                    name={emp.employee_name}
                              salary={emp.employee_salary}
                              age={emp.employee_age}>
                    </Employee>
                    );
                })
            }
              </tbody>
         
            </table>
        );
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red",textAlign:"center"}}>Employees Details</h1>
              {this.displayEmployes()}
            </div>
        );
    }
}
export default Employees;