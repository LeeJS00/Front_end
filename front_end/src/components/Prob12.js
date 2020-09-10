import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob12 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
    };
  }
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
  }

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value,
    });
  }
  submit() {
    this.setState({
      answer: ''
    });
    dataService.getAns('12',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });;
  }

  render() {
    return (
      <div>
        <div className="story">
          <div className="marginbottom">“지성아, 이게 무슨 소리지?”
          <br></br><br></br>“벌써 좀비가 들어온 건가...?
          <br></br><br></br>밖에서 무언가가 아우성거리는 소리가 들리기 시작한다.
          <br></br><br></br>소리는 점점 선명해지고 가까워지는 것 같다.
          <br></br><br></br>“일단 옥상으로 가자. 빨리 짐 챙겨!”</div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 12]
          <br></br><br></br>(6, 5, 1) * (3, 2, 3) = 111
          <br></br><br></br>(5, 4, 2) * (3, 2, 1) = ?

        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 숫자"
              type="text"
              required
              value={this.state.answer}
              onChange={this.onChangeAnswer}
              onKeyPress={this.handleKeyPress}
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/dKScaY29PBLjawsodEfYM/dPOTf/Ey6/9wVLqhhiPDWnBbsYuC4qwDhLUSfblwFuY2CfcSvJDjUGz76pdZn0bw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}