import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE;
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News  pagesize={5} apiKey={this.apiKey} category="general"/>}></Route>
        <Route exact path="/general" element={<News key="general" apiKey={this.apiKey} pagesize={5} category="general"/>}></Route>
        <Route exact path="/business" element={<News key="business" apiKey={this.apiKey} pagesize={5} category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" apiKey={this.apiKey} pagesize={5} category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News key="health" apiKey={this.apiKey} pagesize={5} category="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" apiKey={this.apiKey} pagesize={5} category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" apiKey={this.apiKey} pagesize={5} category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" apiKey={this.apiKey}  pagesize={5} category="technology"/>}></Route>

        </Routes>
      </div>
      </Router>
    )
  }
}

