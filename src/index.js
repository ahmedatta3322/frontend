import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Seconds.otf'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'antd/dist/antd.css';
import  { Component } from 'react'
export default class Index extends Component {
    
    constructor(){
        super()
        //console.log("check",String(localStorage.getItem('access_token')))
        //console.log("check2",String(localStorage.getItem('access_token')) == "null")
        this.state = {
            toggle: false
        }
        
    }
    componentDidMount(){
        if (String(sessionStorage.getItem('access_token')) == "null"){
            this.setState({toggle: false})
            //console.log("check here")
        }
        else {
            this.setState({toggle: true})
        }

    }
    handleauth(){
        
    }   
        
    render() {
        //console.log(this.state.toggle)toggle = {this.handleauth.bind(this)}
        return (
            <App  isauth={this.state.toggle}/>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
