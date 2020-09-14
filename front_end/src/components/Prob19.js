import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob19 extends Component {
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
    dataService.getAns('19',this.state.answer).then(response=>{
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
          <div className="marginbottom">“아직 진정이 안 된 거 같은데 따뜻한 우유라도 마실래요?”
          <br></br><br></br>“감사합니다.”
          <br></br><br></br>“제가 좀비에 대해 몇 달간 연구해 본 결과, 좀비는 배가 고플 때 걷잡을 수 없이 예민해집니다. 본능에 충실한 놈들이다 보니 식욕만 해결된다면 온순해지죠.”
          <br></br><br></br>현수와 좀비에 대한 이야기를 나누며 따뜻한 우유와 음식들을 먹으니 마음이 편안해지면서 정신이 몽롱해진다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 19]
          <br></br><br></br>1+2  7+8  3+4  W+E  5+6  8+9  9+0  H+J
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