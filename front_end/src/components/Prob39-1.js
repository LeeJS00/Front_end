import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob39_1 extends Component {
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
    dataService.getAns('39_2',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="story">
          <div className="marginbottom">“문 닫아!!” 
          <br></br><br></br>문을 닫으려는 순간 대피소 안 사람들이 막아선다.
          <br></br><br></br>“아직 밖에 사람이 있잖아요!”
          <br></br><br></br>“그럴 시간 없어!”
          <br></br><br></br>사람들이 문을 닫으려는 순간 저 멀리서 소리가 들린다.
          <br></br><br></br>“아직이야! 기다려!!”
          <br></br><br></br>누군가가 뛰어온다.
          <br></br><br></br>그러나 그 뒤에는 좀비떼가 달려오고 있었다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 39]
          <br></br><br></br>양자역학에 따르면,
          <br></br><br></br>WAVE와 PARTICLE은 동등하다고 한다.
          <br></br><br></br>또한 빅뱅이론에 따르면,
          <br></br><br></br>LIGHT이 움직임과 동시에 TIME이 시작되었다고 한다.
          <br></br><br></br>7 +7 +7 +0 -16 +20 -14 -4 +0 -5 +8 +7
          <br></br><br></br>USE : 2 1 19 5 c b
          <br></br><br></br>https://bit.ly/?
          </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 영어"
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
          <Link to={("/6qcGjm3+qMtd3BfPNsXLHkX/HvCFGb0c31pA8JkPS6E81cC9KKqitQJW/t1vOZnpVCRFBtDbJAq1REfcnbCYeg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}