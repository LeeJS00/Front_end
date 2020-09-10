import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob36_3 extends Component {
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
    dataService.getAns('36_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">지성은 눈을 질끈 감는다.
          <br></br><br></br>“안돼!!”
          <br></br><br></br>좀비는 지성의 얼굴을 훑더니 다시 돌아간다.
          <br></br><br></br>지성은 무사히 방 밖으로 나왔고, 백신이 유효함을 직접 보였다.
          <br></br><br></br>곧바로 박교수는 다른 교수들에게 연락한다.
          <br></br><br></br>“백신이 만들어졌습니다! 얼른 중앙 연구실로 모여주세요!”
          <br></br><br></br>교수들이 하나 둘 모였고, 승훈과 지성은 백신 개발 과정을 일일이 설명한다.
          <br></br><br></br>“백신이 유효함도 보였다면서요. 무엇을 고민하십니까! 얼른 만듭시다.”
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 36]
          <br></br><br></br>빛이 세 번 비추거나 새 다섯마리가 모이면 그 곳에 있는 사람은 얼쑤 좋다구나 한다.
          <br></br><br></br>길을 걷고 있던 포닉스와 넙죽이는 매화를 한번 보고 한 걸음 뛰고, 소나무를 보고 한 걸음 뛰니 어느새 붓꽃이 보이더라.
          <br></br><br></br>포닉스와 넙죽이는 서로의 비중을 겨루다가 이긴 이의 네번째와 다섯번째를 이어붙이기로 하였다.
          <br></br><br></br>이들의 결과물은 무엇일까.
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
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/Z0ivzmvkY3m+EvoBduHQED4CsiUKooUexbkkE/il+LnjElzHae/SHAIvUE69hSHaIuEM/6hPiLEbg7nzIuIUPA==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}