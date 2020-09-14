import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob33_2 extends Component {
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
    dataService.getAns('33_3',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 향수가 뿌려진 외투를 가속기연구소에서 멀리 떨어진 곳에 두고,
          <br></br><br></br>승훈과 지성은 들뜬 마음으로 대피소를 향해 달려간다.
          <br></br><br></br>“이제 대피소 사람들이 이 백신을 다 맞으면 다시 원래 세상으로 돌아갈 수 있을 거야!”
          <br></br><br></br>“저기다!”
          <br></br><br></br>대피소엔 암호가 걸려있었고, 빠르게 문제를 풀어낸다.
          <br></br><br></br>“저기요! 저희가 백신을 개발했어요!”
          <br></br><br></br>그러나 대피소 안은 수상할 정도로 조용했고, 들려오는 것은 지성과 승훈의 메아리밖에 없었다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 33]
          <br></br><br></br>보아라 깊은 밤에 내린 눈
          <br></br><br></br>아무도 본 사람이 없다
          <br></br><br></br>아무 발자국도 없다
          <br></br><br></br>아 저 혼자 고요하고 맑고
          <br></br><br></br>저 혼자 아름답다
          <br></br><br></br><br></br>오늘은 무슨 날일까.
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