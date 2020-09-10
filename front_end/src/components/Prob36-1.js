import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob36_1 extends Component {
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
    dataService.getAns('36_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">그 후에 비명 소리와 함께 이상한 소리가 들린다.
          <br></br><br></br>승훈은 문에 귀를 갖다대고 집중해서 듣는다.
          <br></br><br></br>“....살려주세요!!”
          <br></br><br></br>이상한 낌새를 느낀 승훈은 곧바로 암호가 걸린 문을 연다.
          <br></br><br></br>문이 열리니 피범벅의 사람이 뛰쳐나온다.
          <br></br><br></br>“얼른 문 닫아요!”
          <br></br><br></br>승훈은 영문도 모른채 문을 닫는다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 36_2층을 골랐을 때]
          <br></br><br></br>O 10E O 2N O 20E O 1N O 1N7E O 1S2E O 2S10W O 1S O 12E O 1S4W O
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
          <Link to={("/7sjrqEkyg6q88MlGzvRObRHsgYNXIHdO50NWwM97jwZofLsKEwECxAhPJEz/t0cTPlPGxuLSrkhBKdoKQ9SiRw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}