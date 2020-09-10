import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class User extends Component {  
  constructor(props) {
    super(props);    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.state = {
        cnt:1,
        name:"",
        num:"",
        tel:""
    };
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
  render() {    
    return (
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
          <Link to="/End"> <button className="btn">제출</button></Link>
        </div>   
      </div>
    );
  }
}