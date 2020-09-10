import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob33_1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      answer:"",
      link : "/",
    };
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
    dataService.getAns('33_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">“우선 못 들어오게 입구를 봉쇄합시다!”
          <br></br><br></br>그 말을 들은 사람들은 서둘러 출입문에 물건을 쌓기 시작한다.
          <br></br><br></br>물건이 어느 정도 쌓였을 때, 문이 몇 번 들썩이다가 멈춘다.
          <br></br><br></br>“후… 좀비가 한 마리 뿐이어서 다행이지. 어쩔 뻔했습니까.”
          <br></br><br></br>승훈은 숨을 고른다.
          <br></br><br></br>그때 옆에 있던 한 여자가 말을 건다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 33]
          <br></br><br></br>A와 B는 은행에서 금을 훔친다. 그러나 보안에 의해 A와 B는 다르게 탈출하게 되었고, 금을 짊어진 A는 B에게 쪽지를 건네며 여기서 만나자고 이야기한다.
          <br></br><br></br>B는 어디로 가야할까?
          <br></br><br></br><br></br>Keyboard number in regular order
          <br></br><br></br><br></br>O = 19
          <br></br><br></br>N = 56
          <br></br><br></br>S  = 53
          <br></br><br></br>T = 8
          <br></br><br></br>TF = 73
          <br></br><br></br>F = 19
          <br></br><br></br>Z = 71
          <br></br><br></br>SE = 11
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
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/AMLIMkxCm+lbxEPLZ8b94Ba5DjErLq/HZzWHOSoI0oMNUw+yseSK+BGWzbaJfXVbzdXRcuaFzs1OST018bPoSg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}