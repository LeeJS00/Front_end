import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob11 extends Component {
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
    dataService.goPage(11).then(res=> {
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
    dataService.getAns('11',this.state.answer).then(response=>{
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
          <div className="marginbottom">[무은재 기념관]
            <br></br><br></br>승훈과 지성은 좀비의 흔적을 찾는 데 집중한다.
            <br></br><br></br>예상대로 좀비들은 무은재 기념관에는 도착하지 못한 듯하다.
            <br></br><br></br>그러나 아무 인기척도 느껴지지 않는 무은재 기념관에 승훈과 지성은 마음이 착잡해진다.
            <br></br><br></br>“정신 차리고, 실험 준비 하자.”
            <br></br><br></br>지성이 가방에서 실험 도구들을 하나 둘 꺼낸다.
            <br></br><br></br>승훈도 금방 정신 차린 뒤 완성되어 가는 샘플을 바라본다.
            <br></br><br></br>“지성아, 우리 성공할 수 있을까?”
            <br></br><br></br>“당연하지. 헛된 생각하지 말고, 시작하자.”
            <br></br><br></br>지성과 승훈은 마음을 다잡고 백신 연구에 다시 몰두한다.
            <br></br><br></br>지성과 함께 연구하니 연구 진행 속도는 점점 빨라졌고,
            <br></br><br></br>어느덧 백신 개발의 막바지에 도착했다.
        </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 11]
          <br></br><br></br>네모난 눈사람이 2개 있다.
          <br></br><br></br>한 눈사람은 오른쪽 귀가 없고, 다른 눈사람은 왼쪽 다리가 없다.
          <br></br><br></br>이 두 눈사람이 녹아 서로 붙게 되면?
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
          <Link to={this.state.link} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
        </div>)
      :(<div/>))}
      </div>);
  }
}