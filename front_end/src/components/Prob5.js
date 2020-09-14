import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob5 extends Component {
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
    dataService.getAns('5',this.state.answer).then(response=>{
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
          <div className="marginbottom">좀비가 된 교수님이 있는 자신의 연구실에 다시 돌아갈 수 없는 상황이 된 승훈은 지성의 연구실에서 백신 개발을 돕기로 한다. 
          <br></br><br></br>지성과 실험실 동료인 태호가 실험재료를 들고 돌아온다.
          <br></br><br></br>“어? 지성아 이 사람은 누구야?”
          <br></br><br></br>“실험실 옆에 쓰러져 있길래 데려왔어. 이제부터 우리와 함께 백신을 연구할 사람이야.”
          <br></br><br></br>갑자기 어딘가에서 코를 찌르는 이상한 냄새가 난다.</div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 5]
          <br></br><br></br>어느 대학병원 응급실에 한 과학자가 연구하는 분야로 인해 뇌에 심각한 손상을 입고 병원에 실려왔다.
          <br></br><br></br>MRI 검사 결과 대뇌의 중전두회를 시작으로 상측두회 전중심회 하전두회의 덮개부분 상연변회가 모두 심각한 손상을 입었다.
          <br></br><br></br>과학자가 연구하던 분야는?
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
          <Link to={this.state.link} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}