import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob29_2 extends Component {
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
    dataService.getAns('29_3',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 청암 밖 굶주린 좀비들 또한 지성과 승훈을 보고 쫓아가기 시작한다.
          <br></br><br></br>도착한 곳은 화학관이었고, 좀비가 없다고 판단한 지성과 승훈은 화학관 안에 숨어 숨을 돌린다.
          <br></br><br></br>“우리 논문은 찾았어?”, 승훈이 물었다.
          <br></br><br></br>지성은 자랑스럽게 상자 하나를 꺼내 들었고, 상자에는 [포스텍 의학 논문 - 바이러스]라 쓰여있었다.
          <br></br><br></br>하지만 상자는 숫자로 된 자물쇠가 잠겨있고, 옆에는 의미심장한 문구가 쓰여있다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 29]
          <br></br><br></br>나
          <br></br><br></br>멀리
          <br></br><br></br>바느질 두번
          <br></br><br></br>토르 헤위에르달이 탄 배
          <br></br><br></br>차
          <br></br><br></br>암사슴 두마리
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 한글ㅇ"
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
          <Link to={("/Xr2n9czHy9Flhj6YzV4/6S2Ek0Bwme+kIXzT5BhXzBgqjQAtlS2OOKg7atFA1DaWSa36VbPvcWAnGKozQ8jqTg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}