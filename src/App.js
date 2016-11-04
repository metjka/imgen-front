import React from 'react';
import  ReactDom from 'react-dom';
import {Router, Route, hashHistory}from 'react-router'
import LoginScreen from './LoginScreen'
import MainForm from './Main'
import App2 from './App2'

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={LoginScreen}/>
        <Route path="/user" component={MainForm}/>
    </Router>
    , document.getElementById('app'));
