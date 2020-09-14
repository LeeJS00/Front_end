import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      link : "/",
      answer:"",
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
    dataService.getAns('1',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });;
  }
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
  }
  render() {
    return (
      <div>
        <div className="story">
          <div className="marginbottom">20XX년 5월 19일, KAVID-99 바이러스가 원인 모를 장소에서 발병하였고, 세계 각지로 빠르게 퍼졌다. 바이러스에 감염될 시, 이성을 잃고 후각이 발달하며 사람들을 물어 전염시킨다. 사람들은 이를 ‘좀비(Zombie)’로 정의하였다. 대한민국도 다른 나라들과 마찬가지로 전국 각지에 바이러스가 퍼졌고, 생존자들은 얼마 남지 않았다.
          <br></br><br></br>[포스텍 생명공학 연구센터]
          <br></br><br></br>지난주, 부산마저 보안이 뚫리며 포스텍은 인류의 마지막 희망이 되었다.
          <br></br><br></br>포항의 유일한 대피소인 가속기 연구소에 생존자들이 모여 있었고, 마지막 남은 과학자들은 백신 개발에 전념한다.
          <br></br><br></br>생명공학 연구센터에서 백신 연구에 몰두하던 승훈은 갑작스럽게 꺼진 실험실 전등에 당황한다.
          <br></br><br></br>승훈은 조심스럽게 실험실 전등 스위치를 껐다 켜본다.
          </div>
        </div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 1]
          <br></br><br></br>읽고 말하시오.
          <br></br><br></br>7 - 17 - 1117 - ???
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