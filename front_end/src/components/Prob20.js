import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob20 extends Component {
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
    dataService.goPage(20).then(res=> {
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
    dataService.getAns('20',this.state.answer).then(response=>{
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
          <div className="marginbottom">몇 분이 지났을까, 깨어나 보니 승훈의 팔과 다리는 밧줄로 묶여있었다.
          <br></br><br></br>지성 또한 묶여있었고, 아직 깨어나지 못했다.
          <br></br><br></br>“정신은 좀 듭니까?”, 현수가 들어오며 말한다.
          <br></br><br></br>“뭐야 이거 풀어 빨리!”, 승훈이 소리친다.
          <br></br><br></br>현수는 아무 말 없이 사무실 문을 연다.
          <br></br><br></br>그곳엔 입마개를 하고 사슬에 몸이 묶인 좀비가 있었다.
          <br></br><br></br>현수는 아직 깨어나지 않은 지성을 데려가며 말한다.
          <br></br><br></br>“이 좀비는 내 실험체야. 포박해서 실험이 가능한 상태까지 만드는 데 오랜 시간이 걸렸지. 그런데 이 친구가 사람을 못 먹은 지 한 달이 넘어가. 지난주부터 너무 심각하게 예민해져서 연구할 수 없는 지경에 이르렀어. 그러다 너희를 만난 거지. 너희에겐 정말 미안하지만 내 실험체를 이대로 둘 수는 없어.”
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 20]
          <br></br><br></br>거울의 방에 들어왔다.                
          <br></br><br></br>Γ 』 ] 5 █ 廿 λ 0 下 ? F ∋ 卫 ᆠ  <text className="mirror">  |</text></div>          
          <div><br></br><br></br>?는 무엇을 의미하는걸까.</div>   
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
        </div>)
      :(<div/>))}
      </div>);
  }
}