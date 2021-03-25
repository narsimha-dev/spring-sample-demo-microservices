import React from 'react'
import Axios from 'axios'

class LoginPage extends React.Component{
    constructor(props){
        console.log("constructor is called")
        super(props);
        this.state={
            userName:'Narasimhulu' ,
            password:'',
            apiMEssage:'',
            userList:[]
            
        }
        this.isActiuvbe=false
    }
    componentDidMount(){

        console.log("componentDidMountv is called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount is called")
    }
    render(){

        console.log("render is called")
        
        return(
<div>
    <p>
        THis is LogionPage
    </p>
        <h2>Userame: {this.state.userName}</h2>
        <h2>PAssword: {this.state.password}</h2>
        <h3>API message: {this.state.apiMEssage}</h3>
    </div>
        )
    }
}
export default LoginPage;