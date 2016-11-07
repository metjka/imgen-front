import React from 'react';
import  ReactDom from 'react-dom';
import {Router, Route, hashHistory}from 'react-router'
import LoginForm from './LoginForm'
import MainForm from './Main'
import UploadForm from './UploadForm'
import App2 from './App2'

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={LoginForm}/>
        <Route path="/user" component={MainForm}/>
        <Route path="/upload" component={UploadForm}/>
    </Router>
    , document.getElementById('app'));
