import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob29_3 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
      response:false
    };
  }
  componentDidMount() {
    dataService.goPage(29).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
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
    dataService.getAns('29_4',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (<div>
      {((this.state.response) ? (
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
          <br></br><br></br>왕이 있고 그의 왼편에는 왕비가 있다. 
          <br></br><br></br>그의 오른편에는 일인자라 불리는 이가 있다. 
          <br></br><br></br>왕비의 곁에서 신의 가호가 함께하는 이의 아들의 생일은 언제인가?
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 숫자4개"
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
        </div>)
      :(<div/>))}
      </div>);
  }
}