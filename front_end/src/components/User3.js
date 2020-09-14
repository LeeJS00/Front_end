import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class User3 extends Component {  
  constructor(props) {
    super(props);    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
        cnt:1,
        name:"",
        num:"",
        tel:"",
        response:false
    };
  }
  componentDidMount() {
    dataService.goPage(34).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getUser().then(response=>{
      this.setState({
        cnt:response.data+1
      });
    }).catch(error=>{
      console.log(error);
    });    
  }
  getUserNum() {
    var n=1;
    dataService.getUser().then(response=>{
      n += response.data;
    }).catch(error=>{
      console.log(error);
    });
    console.log(n);
    return n;
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeNum(e) {
    this.setState({
      num: e.target.value,
    });
  }
  onChangeTel(e) {
    this.setState({
      tel: e.target.value,
    });
  }
  submit() {
    this.setState({
      name: '',
      num: '',
      tel: ''
    });
    dataService.endUser(this.state.name,this.state.num,this.state.tel,3).then(response=>{
      
    }).catch(function (error) {
      console.log(error);
    });
  }
  render() {    
    return (<div>
      {((this.state.response) ? (
        <div>
        <div className="select-title">
          <div> 미궁의 {this.state.cnt}번째 클리어를 축하드립니다! </div>
        </div>
        <div className={"user-container"}>
            <div className='user-label'>
                이름
            </div>
          <form>
            <input
              className="user-input"
              placeholder="이름 입력"
              type="text"
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </form>          
        </div>
        <div className={"user-container"}>
            <div className='user-label'>
                학번
            </div>
          <form>
            <input
              className="user-input"
              placeholder="학번 입력"
              type="text"
              required
              value={this.state.num}
              onChange={this.onChangeNum}
            />
          </form>          
        </div>
        <div className={"user-container"}>
            <div className='user-label'>
                연락처
            </div>
          <form>
            <input
              className="user-input"
              placeholder="연락처 입력"
              type="text"
              required
              value={this.state.tel}
              onChange={this.onChangeTel}
            />
          </form>          
        </div>
        <div className="center">
          <Link to="/End"> <button className="btn" onClick={this.submit}>제출</button></Link>
        </div>   
      </div>
    )
    :(<div/>))}
    </div>);
  }
}