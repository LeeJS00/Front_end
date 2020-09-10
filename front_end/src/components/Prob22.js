import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob22 extends Component {
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
    dataService.getAns('22',this.state.answer).then(response=>{
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
          <div className="marginbottom">현수가 멈춘 뒤 비웃으며 말한다. 
          <br></br><br></br>“그렇다면, 너는 꼭 백신을 만들어. 대신 얘는 내 실험을 위해서라도 데려가겠어.”
          <br></br><br></br>현수는 들은 체 하지 않고, 지성을 계속 끌고 간다.
          <br></br><br></br>승훈은 밧줄을 모두 풀고, 현수를 따라간다. 현수는 좀비의 입마개를 풀고 지성을 던지기 직전이었고, 승훈은 가져왔던 무기를 이용해 현수를 겨우 막는다.
          <br></br><br></br>“정말이지… 너는 살려준다니까!” 
          <br></br><br></br>현수와 승훈 사이에서 몸싸움이 오가다 승훈은 현수를 사무실 안으로 밀어 넣는다.
          <br></br><br></br>좀비는 현수를 물었고, 현수에게서 사람의 모습이 점차 없어져 간다.
          <br></br><br></br>승훈은 얼른 지성을 깨워 학생회관 밖으로 나간다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 22]
          <br></br><br></br>미국에서 엄마는 한 발짝씩, 아들은 두 발짝씩 움직인다
          <br></br><br></br>한국에서 엄마는 왼쪽, 아들은 오른쪽을 보고있다.
          <br></br><br></br> <text style={{marginLeft: 20 }}>Hello world</text>
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
          <Link to={("/5gzfxne3U9vftgaspMp9ma+1GgaPh8suUFkKDUQQlnIjqOlpsklg57w21jcqHKJ0gFJl0ho3BlqFLPxCvkNvLg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}