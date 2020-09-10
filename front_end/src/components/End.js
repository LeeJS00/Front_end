import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class End extends Component {  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {    
    return (
        <div>
        <div className="story">
          <div className="marginbottom">
          <br></br><br></br>미궁 스토리에 도움을 주신 모든 분께 감사합니다.
 
          <br></br><br></br><br></br>made by 사이버포스텍카이스트학생교류전 준비위원회 홍보팀
          <br></br><br></br>김동하
          <br></br><br></br>김민규
          <br></br><br></br>김지성
          <br></br><br></br>남수헌
          <br></br><br></br>박재완
          <br></br><br></br>이승훈
          <br></br><br></br>이현수
          <br></br><br></br>제태호
 
          <br></br><br></br><br></br>미궁 Task Force
          <br></br><br></br>강준길
          <br></br><br></br>이정언
          <br></br><br></br>홍사준
          </div>
        </div>        
        <div className="center">
          <Link to="/Home"> <button className="btn">이동</button></Link>
        </div>   
      </div>
    );
  }
}