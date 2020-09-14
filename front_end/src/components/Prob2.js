import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob2 extends Component {
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
    dataService.goPage(2).then(res=> {
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
    if(this.state.answer === "; ~~;~~~; ~ ; ~  ;~  ;") {
    }
    else {
    dataService.getAns('2',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });
    }
  }

  render() {
    return (
      <div>
      {((this.state.response) ? (<div>
        <div className="story">
          <div className="marginbottom">다시 전등이 켜진다.
          <br></br><br></br>‘뭐지…?’ 불안한 느낌이 들었지만 승훈은 연구에 몰두한다.
          <br></br><br></br>그때, 실험실의 전화가 울린다.
          <br></br><br></br>승훈의 지도교수님이었다.
          <br></br><br></br>“네. 교수님.”, 전화를 받자마자 알 수 없는 비명소리가 승훈의 귀를 찌른다.
          <br></br><br></br>승훈은 침착하게 교수님의 말에 귀를 기울인다.
          <br></br><br></br>“승훈아. 지금부터 잘 들어… 연구… 자료… 사… 너에게 인류… 마지막이 달려 있… 꼭 성공하… 치지직…”
          <br></br><br></br>무언가 잘못된 것을 느낀 승훈은 교수님의 랩으로 달려간다.</div>
        </div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 2]
          <br></br><br></br>점을 찍으니 공간이 열렸고      	
          <br></br><br></br>선을 긋자 흐름이 생겼다.
          <br></br><br></br>결국 우리는 한낱 프로그램에 불과했다.
          <br></br><br></br><pre style={{color:"white"}}>; ~~;~~~; ~ ; ~  ;~  ;</pre></div>        
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
      </div>)
    :(<div/>))}
    </div>);
  }
}