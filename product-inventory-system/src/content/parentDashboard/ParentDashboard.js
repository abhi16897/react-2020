import React from 'react';
import Dashboard from '../Dashboard/Dasboard';
import {  Bar } from 'react-chartjs-2';
import './parentdahsboard.css';
import axios from 'axios'
class ParentDashboard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            category:'',
            selectedData:[],
            charData:{    
            }
        }
    }
    componentDidMount(){
        if(localStorage.getItem('loggedIn') === null){
            this.props.history.push('/');
        }
    }
    dashboardform=(category)=>{
        axios.get('http://localhost:3000/allProducts/?username='+localStorage.getItem('username')).then((res)=>{
            let titles=[]
            var stocks=[]
            console.log(res.data)
            let data=res.data.filter((prod)=>prod.category===category);
            this.setState({selectedData:data})
            this.state.selectedData.map((cat)=>{
               return(
                titles.push(cat.name)
               ) 
            });
            this.state.selectedData.map((cat)=>{
                return(
                 stocks.push(parseInt(cat.stock))
                ) 
             });
             console.log(titles)
             this.setState({charData:
                {
                    labels:[...titles],
                datasets:[{
                    label:'Stock Availability',
                    data:[
                        ...stocks
                    ],
                    backgroundColor:[
                        'rgba(225,99,132,0.6)',
                        'rgba(225,206,86,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(153,102,255,0.6)',
                        'rgba(225,159,64,0.6)',
                        'rgba(225,99,132,0.6)'
                    ]
                }],
                } 
            });
        })
        console.log(category)
        console.log(this.state.charData)
    }
    render() { 
        return ( 
            <div className="dashboard">
                <div>
                    <Dashboard parentcategory={this.dashboardform}></Dashboard>
                </div>
                <div className="dashboard-bar">
                    <h1>Chart</h1>
                    <Bar
                    data={this.state.charData}
                    width={100}
                    height={50}
                    options={{
                        title:{
                            display:true,
                            text:'Stock Availability of selected Category'
                        },
                        legend:{
                            display:true,
                            position:"top"
                        },
                        maintainAspectRatio:false
                    }}>

                    </Bar>
                </div>
            </div>
         );
    }
}
 
export default ParentDashboard;