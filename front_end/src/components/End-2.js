import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class End2 extends Component {  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {    
    return (
        <div>
        <div className="story">
          <div className="marginbottom">저의 다음 목적지는 [포스텍 대전캠퍼스 대피소]입니다.
          <br></br><br></br>그곳에는 아직 사람들이 생존해 있다고 하는군요.
          <br></br><br></br>혹시라도 이 편지를 읽으시는 분들도 그곳으로 가길 바랍니다…’ 
          <br></br><br></br>“지성아, 우리 이제 어떡해야 할까..?”
          <br></br><br></br>지성은 잠시 고민하다 말한다.
          <br></br><br></br>“뭐해, 짐 챙겨. 대전으로 간다.”
          </div>
        </div>        
        <div className="center">
          <Link to="/zxEnxC1NP6PPd/Pjn3Olr9ZBLL2ci33fn8H9vuMVjw4="> <button className="btn">완료</button></Link>
        </div>   
      </div>
    );
  }
}