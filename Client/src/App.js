import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import {BrowserRouter as Router} from 'react-router-dom'
import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Home  from './components/home.component';
import Newsletter from "./components/Newsletter.component";


import 'antd/dist/antd.css';

import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Avatar, Card, Col, Row, Image} from 'antd';


import logo from './Assets/logo.PNG'
import Success from "./components/success.component";

const { Header, Content, Footer } = Layout;



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
  
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
       <Layout className="layout" >
      
      <Header>
        <div className="logo" />
  
       
        
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" style={{float:"right"}}><Avatar size={64} style={{float:'right'}} icon={<UserOutlined />} /></Menu.Item>  
          <Menu.Item key="2" style={{float:"right"}}>About</Menu.Item>
          <Menu.Item key="3" style={{float:"right"}}>Contact Us</Menu.Item>
          <Menu.Item key="4" style={{float:"right"}}>Self Help</Menu.Item>
          <Menu.Item key="5" style={{float:"right"}}>Home</Menu.Item>
          <img
            width={50}
            src={logo}
            />
          
        </Menu>
      </Header>
     
    </Layout>
    <Router>
      <header className="App-header">
      <Route 
        exact 
        path = {"/home"} 
        render = {props =>(
         <Home />
        )}
        />
      </header>
      </Router>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/Newsletter" component={Newsletter} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
