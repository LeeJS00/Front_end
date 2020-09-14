import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class Home extends Component {  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {    
    return (
      <div>
        <div className="story">
            <div className="marginbottom">오탈자 및 오류 발견시 <text style={{fontSize: "large"}}><p></p>01047843914,<p></p>andrew1208@postech.ac.kr<p></p>홍보팀장 박재완<p></p></text>으로 연락주세요.
            <p></p><br></br><text style={{fontSize: "large", fontWeight:"bold", color:"red"}}>미궁 답은 대소문자, 띄어쓰기를 구분합니다. </text>
            </div>
          </div>
        <div className="center">
          <Link to="/Prob1" className={'btn'}>시작</Link>
        </div>   
      </div>
    );
  }
}