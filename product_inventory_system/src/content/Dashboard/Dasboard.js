import React from 'react';
import './dashboard.css'
import {withRouter} from 'react-router-dom'
class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedCategory:'',
            buttonclicked:true
        }
    }
    onchangeSelcet=(e)=>{
        console.log(e.target.value)
        this.setState({selectedCategory:e.target.value})
    }
    dashboardform=(e)=>{
        e.preventDefault();
        console.log('hello')
        this.setState({buttonclicked:true})
        console.log(this.state.selectedCategory)
        console.log(this.state.buttonclicked)
        this.props.parentcategory(this.state.selectedCategory)
    }
    componentDidMount(){
        if(localStorage.getItem('loggedIn') === null){
            this.props.history.push('/');
        }
    }
    render() { 
        return (  
            <div className="dashboardCss">
                <h1>Dashboard</h1>
                <div className="dashboard-form">
                    <form onSubmit={this.dashboardform}>
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td><b>Select Category</b></td>
                                    <td>
                                        <select onChange={this.onchangeSelcet} required>
                                        <option value=''>Select One</option>
                                        <option value="Groceries">Groceries</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Vegitables">Vegitables</option>
                                        <option values="Fruits">Fruits</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td><button type="submit">Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default withRouter(Dashboard);