import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob31_1 extends Component {
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
    dataService.getAns('31_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">머리가 아파져 온다. 좀비는 결국 실험실 문을 뚫고 들어왔고, 막을 새도 없이 지성을 물었다. 승훈은 실험대 밑에 숨어 지성이 물리는 것을 본다.
          <br></br><br></br>“지...지성아..! 안돼!!”
          <br></br><br></br>백신이 효과가 있길 바라지만, 지성의 외관과 행동은 점점 좀비를 닮아간다.
          <br></br><br></br>희망을 잃은 승훈은 탈출할 궁리를 해보지만, 좀비가 된 지성과 눈이 마주치게 된다.
          <br></br><br></br>‘젠장…!’
          <br></br><br></br>지성을 뿌리치고 가속기연구소까지 달려간다.
          <br></br><br></br>가속기연구소에 암호가 걸려있다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 31]
          <br></br><br></br>예전부터 선조들은 여백의 미를 중요시 여겼다.
          <br></br><br></br>여백은 우리 민족의 <text style={{color:"blue"}}>혼</text>을 담고 있으며,
          <br></br><br></br>널리 퍼져있는 기의 표상으로 여겨져 오기도 했다.
          <br></br><br></br>결국, 동양화에서 여백이 가지는 해석학적 의미는
          <br></br><br></br><text style={{color:"blue"}}>무</text>에서 <text style={{color:"blue"}}>유</text>를 바라보게 만드는 찬연한 선조들의 지혜이다.
          <br></br><br></br>이제 우리도 <text style={{color:"blue"}}>청</text>의 여백을 나열해보자.
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
          <Link to={this.state.link} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}