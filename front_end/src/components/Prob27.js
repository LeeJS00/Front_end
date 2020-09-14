import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

import dataService from "../services/user.service";

export default class Prob27 extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      
      response:false
    };
  }
  componentDidMount() {
    dataService.goPage(27).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
  }

  render() {    
    return (<div>
      {((this.state.response) ? (
      <div>
        <div className="select-title">엘리베이터를 타고 층수를 누른다.
        <br></br><br></br>어느 층으로 가시겠습니까?
        </div>
        <div>
          <Link to="/5tjfkqMBOglbljbem18VpOXd8I4y0eFtxnhXCdcACYg="> <button className="select-answer"> 2 층</button></Link>
        </div>   
        <div >
          <Link to="/EB1nhJaYZKBtmxe1a+DKgjjrNJx9GwxYXX9F2hFs32g="> <button className="select-answer"> 3 층</button></Link>
        </div>   
        <div>
          <Link to="/FTKJAQCLxD1Yb8FXgXwAKLeyu8Z0GesHJE49DayHbow="> <button className="select-answer"> 4 층</button></Link>
        </div>   
      </div>
      ):(<div/>))}</div>
    );
  }
}