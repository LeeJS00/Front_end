import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob3 extends Component {
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
    dataService.getAns('3',this.state.answer).then(response=>{
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
          <div className="marginbottom">비밀번호를 입력한 뒤 들어가 보니, 논문과 책들은 피로 난장판이 되어있었고, 교수님은 좀비에게 둘러싸여 있었다.
          <br></br><br></br>승훈은 교수님을 발견한 뒤 구해보려 노력하지만 좀비들이 너무 많아 접근할 수 없다.
          <br></br><br></br>교수님은 주변에 있는 물건들을 이용해 최후의 저항을 해보지만 굶주린 좀비들에게는 그저 먹잇감일 뿐이었다. 
          <br></br><br></br>“안돼...!” 교수님의 마지막 비명이 들렸고 교수님은 승훈의 앞에서 좀비들에게 무참히 목을 물어 뜯겼다.
          <br></br><br></br>승훈은 연구실에서 나가 정신 없이 도망친다.
          <br></br><br></br>그러다 좀비의 흔적이 보이지 않는 장소에 들어간 후 정신을 잃는다. 
</div>
        </div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 3]
          <br></br><br></br>동생 혼자 있으면 아무것도 없다.
          <br></br><br></br>형이 동생 앞에 서면 형 혼자 있는 것보다 두 배 더 크다.
          <br></br><br></br>형제의 이름은?
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 한글"
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
          <Link to={("/57YIXFWY0G7LsQXIzLe/tB/L5g6nv8EQ+FpEQ8VT+4ExjqVJ4e4hXTUdamiD8w4o8aAhG+0N7frL10ry6vdsVw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}