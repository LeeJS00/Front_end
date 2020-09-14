import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"

export default class End1 extends Component {  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {    
    return (
        <div>
        <div className="story">
          <div className="marginbottom">문을 닫을지 결정해야 하는 순간 누군가 문을 닫기 시작한다.
          <br></br><br></br>문이 서서히 닫힌다.
          <br></br><br></br>“거의 다 왔어요! 빨리요!”
          <br></br><br></br>달려오던 사람은 문 앞에서 넘어진다.
          <br></br><br></br>“문 닫아! 못 살려!”
          <br></br><br></br>“맞아요! 우리 다 죽는다고요!”
          <br></br><br></br>문이 거의 다 닫혔을 때, 그 사람이 문 틈으로 손을 집어넣는다.
          <br></br><br></br>그 순간 좀비에게 물리게 되고, 문이 닫히지 않아 수많은 좀비들이 대피소 안으로 들어온다.
          <br></br><br></br>사람들은 겁에 질려 도망간다. 
          <br></br><br></br>‘아무래도 인류의 희망은 없는 것 같아.’, 승훈은 마지막으로 생각한다.
          <br></br><br></br>승훈은 모든 것을 포기한 채 눈을 감는다.
          </div>
        </div>        
        <div className="center">
          <Link to="/UufKY8hapbOrkagktFbwm8RcuJxw1RdLtB11MnqA4fU1="> <button className="btn">완료</button></Link>
        </div>   
      </div>
    );
  }
}