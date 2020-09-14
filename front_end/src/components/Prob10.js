import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob10 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      link : "/",
      answer:"",
      isOpen:false,
      img:null,
      response:false
    };
  }
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
  }
  componentDidMount() {
    dataService.goPage(10).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getImage('10-1').then(response=>{
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ img: "data:;base64," + base64 });
    });
  }

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  submit() {
    this.setState({
      answer: ''
    });
    dataService.getAns('10',this.state.answer).then(response=>{
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
          <div className="marginbottom">“좀비들이 냄새를 맡고 다시 몰려올 거야 어서 다른 장소로 가자.” 
          <br></br><br></br>지성은 지내는 장소를 자주 옮겨 본 듯 하다.
          <br></br><br></br>둘은 보호복을 입고 실험도구를 빠르게 챙겨 생명공학연구센터 밖을 나선다.
          <br></br><br></br>“어디로 가야 할까?”
          <br></br><br></br>“청암은 어떨까? 그곳에는 우리 연구에 필요한 자료가 많을 거야.”
          <br></br><br></br>둘은 청암 방향으로 뛰어가기 시작했다.
          <br></br><br></br>하지만 청암의 입구는 이미 좀비로 가득했고 둘은 108계단 방향으로 재빨리 도망친다.
          <br></br><br></br>“아마 무은재 기념관에는 아직 좀비들이 도착하지 못했을 거야 그쪽으로 가자.” 
          <br></br><br></br>무은재기념관에 도착한 승훈과 지성은 암호로 잠긴 무은재기념관의 정문을 연다.</div></div>
        <hr className="hline"></hr>
        
        {this.state.isOpen && (
          <dialog
            className={"popupDialog"}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image popup"
              src={this.state.img}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 10]<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          <br></br><br></br> When was the best for the first time?
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