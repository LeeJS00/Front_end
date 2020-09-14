import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob32_3 extends Component {
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
    dataService.goPage(32).then(res=> {
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
    dataService.getAns('32_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">연구소 안으로 들어왔을 때, 비상벨이 울리고 총을 든 사람들이 지성과 승훈을 잡아간다.
          <br></br><br></br>“이거 놓으세요! 저희는 백신을 개발했다고요! 빨리 퍼뜨려야 해요!!”
          <br></br><br></br>그러나 의문의 사람들은 묵묵히 지성과 승훈을 지하로 끌고 간다.
          <br></br><br></br>“승훈아, 여기 뭐하는 곳일까..?”
          <br></br><br></br>“나도 모르겠어… 무서워.”
          <br></br><br></br>교도소처럼 생긴 이곳에는 철장 안에 좀비와 사람들이 갇혀있었다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 32]
          <br></br><br></br>지금 시각은 오후 9시. 약속 시간에 늦지 않기 위해서 빨리 가야겠다고 생각했다.
          <br></br><br></br>키가 큰 사람은 우회전, 작은 사람은 좌회전.
          <br></br><br></br>다시 키가 큰 사람은 우회전, 작은 사람도 우회전.
          <br></br><br></br>한 후 다시 키가 큰 사람은 죄회전, 작은 사람은 좌회전.
          <br></br><br></br>키가 큰 사람은 우회전, 작은 사람도 우회전.
          <br></br><br></br>휴, 약속시간에 맞춰서 도착했다. 과연 약속 시각은 언제였을까.
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: x시y분"
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