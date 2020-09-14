import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob4 extends Component {
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
    dataService.goPage(4).then(res=> {
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
    dataService.getAns('4',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });;
  }
  render() {
    return (<div>
      {((this.state.response) ? (
      <div>
        <div className="story">
          <div className="marginbottom">“으음… 여기가 어디지...”
          <br></br><br></br>정신을 차려보니 승훈의 옆에는 실험복은 입은 남자가 앉아 있었다.
          <br></br><br></br>“괜찮으세요?”
          <br></br><br></br>“으… 머리야… 여기가 어딘가요?”
          <br></br><br></br>어디냐는 승훈의 질문에 의문의 남자는 이곳은 자신이 백신 개발을 하는 연구실이며, 연구실 옆에 쓰러져 있어 데리고 들어왔다고 말한다.
          <br></br><br></br>남자의 이름은 지성이며 자신도 백신 개발에 전념하고 있다고 말한다.
          <br></br><br></br>눈에 보이는 지성의 연구실에서도 백신 개발이 한창이었고, 승훈과 지성은 백신 개발에 대해 이야기 하게 된다.</div>
        </div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 4]
          <br></br><br></br>4 * (51.532007 -0.123323) = ?
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
        </div>)
      :(<div/>))}
      </div>);
    }
}