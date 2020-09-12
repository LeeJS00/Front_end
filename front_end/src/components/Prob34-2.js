import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob34_2 extends Component {
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
    dataService.getAns('34_3',this.state.answer).then(response=>{
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
          <div className="marginbottom"> “무슨 일이지..?”
          <br></br><br></br>“더 들어가 보자. 사람들이 있을 거야.”
          <br></br><br></br>깊숙이 들어가 보았을 때, 대피소라는 글씨가 크게 적혀있는 대강당을 찾았다.
          <br></br><br></br>암호를 풀고 들어간다.
          <br></br><br></br>“크오오오..!!”
          <br></br><br></br>좀비들이 사람 냄새에 반응하여 문 쪽으로 뛰어온다.
          <br></br><br></br>지성과 승훈은 당황하지 않고, 대강당 안을 살펴보다가 피로 물든 종이 하나를 발견한다.
          <br></br><br></br>‘혹시라도 이 편지를 읽게 될 누군가에게.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 34]
          <br></br><br></br>포닉스의 명성을 세계에 퍼뜨리기 위해 어학연수를 떠난다.
          <br></br><br></br>한국에서 출발해서,
          <br></br><br></br>이탈리아
          <br></br><br></br>프랑스
          <br></br><br></br>독일
          <br></br><br></br>스웨덴
          <br></br><br></br>핀란드
          <br></br><br></br>다시 도착.
          <br></br><br></br>포닉스의 전공은?
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
          <Link to={("/74CFOkeY6LcqjgFJXdal7VZo4HSIt3KA0hqXuvNVwIjKjWrlk5fjepxjaQ+wDt67UnquFh4zOXYbXElSgKUoQg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}