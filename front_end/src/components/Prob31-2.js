import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob31_1 extends Component {
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
    dataService.goPage(31).then(res=> {
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
    dataService.getAns('31_3',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 지성과 승훈은 실험실 문을 뚫고 들어온 좀비와 마주한다.
          <br></br><br></br>“지성아, 우린 최선을 다했어..”
          <br></br><br></br>“맞아, 나 후회는 없어.”
          <br></br><br></br>좀비는 지성과 승훈을 보고 달려온다.
          <br></br><br></br>두 사람은 눈을 질끈 감고 마지막을 준비한다.
          <br></br><br></br>그때 좀비는 갑자기 방향감각을 상실한 것처럼 승훈과 지성 앞에서 두리번거리기 시작한다. 
          <br></br><br></br>“뭐지…?”
          <br></br><br></br>지성은 이리저리 움직여 보지만 좀비는 눈치채지 못하고,
          <br></br><br></br>승훈의 주위에서 겉돌기만 할 뿐이었다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 31]
          <br></br><br></br>ABCDEFGH
          <br></br><br></br>Soccer
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
          <Link to={this.state.link} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
        </div>)
      :(<div/>))}
      </div>);
  }
}