import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob16 extends Component {
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
    dataService.getAns('16',this.state.answer).then(response=>{
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
          <div className="marginbottom">승훈과 지성은 지곡회관 편의점에 들어간다.
          <br></br><br></br>“비닐로 몸을 감싸면 좀비들이 우리를 찾기 더 힘들어질 거야.”
          <br></br><br></br>지성과 승훈은 비닐로 온몸을 감싼다.
          <br></br><br></br>“하.. 너무 힘들었어. 언제쯤 좀비를 벗어날 수 있을까...:”
          <br></br><br></br>물로 목을 축이며 장비와 식량을 챙기던 중 지성은 바닥에 떨어진 케찹을 밟고 만다.
          <br></br><br></br>“크오오오오오……………”
          <br></br><br></br>“좀비들이 벌써 …!!!”
          <br></br><br></br>냄새를 맡고 좀비들이 몰려오기 시작한다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 16]
          <br></br><br></br>334, 팔레트, 아름다워, ?, 소녀, 거짓말
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
          <Link to={("/8kIqsYie3LZ3rao0MRqePjTsmGUNgkztlsGnIeaxcCEPHHwyBYTT1WOdTZR3jaIwoknNtEmM3K+BD+JlBokwsg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}