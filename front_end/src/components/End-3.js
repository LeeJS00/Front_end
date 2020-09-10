import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class End3 extends Component {  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {    
    return (
        <div>
        <div className="story">
          <div className="marginbottom">교수들은 머지않아 대피소 사람들이 다 맞을 수 있는 양의 백신을 만들었고,
          <br></br><br></br>가속기연구소에 있는 사람들은 하나 둘 백신을 맞기 시작한다.
          <br></br><br></br>모든 사람이 백신을 맞은 후 전 세계에 남은 살아있는 사람들을 구하기 위한 만반의 준비를 끝내고, 대피소 밖으로 발을 내딛는다.
          </div>
        </div>        
        <div className="center">
          <Link to="/gxWZcU9fYanAI9oVt4PG3LKK/6fu5joecKr6JBlkP5E="> <button className="btn">완료</button></Link>
        </div>   
      </div>
    );
  }
}