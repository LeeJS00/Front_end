import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob6 extends Component {
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
    dataService.getAns('6',this.state.answer).then(response=>{
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
          <div className="marginbottom">“안녕하세요. 저는 승훈이라고 합니다.”
          <br></br><br></br>“반가워요. 저는 태호라고 해요.” 승훈은 태호를 처음 봤지만, 어딘가 이상함을 느낀다. 태호의 충혈된 눈과 빠르게 흐르는 식은땀은 승훈에게 꺼림직한 느낌을 준다.
          <br></br><br></br>‘설마.. 아니겠지...’
          <br></br><br></br>그때 태호가 숨을 가쁘게 쉬며 말한다.
          <br></br><br></br>“지성아 나 컨디션이 조금 안 좋은 것 같아서 조금 쉬고 있을게”
          <br></br><br></br>“응. 들어가서 쉬어...”
          <br></br><br></br>승훈은 태호가 조금 신경 쓰이지만 자신이 예민한 것이라 생각하고 연구를 계속 진행한다.
          <br></br><br></br>태호는 느린 발걸음으로 자신의 방으로 들어간다.</div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 6]
          <br></br><br></br>I hate scorpion.
          <br></br><br></br>I have three belt.
          <br></br><br></br><br></br>What is my He2+?
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
          <Link to={("/2Xz58ndH9TOfXfCd10Tqw10QS2BeqRHxIHv2iouufYmNSRHgxqJuva8am4gb76WyMYzr+fJp0VzURhtYOLDMSA==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}