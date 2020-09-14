import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob37_1 extends Component {
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
    dataService.goPage(37).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getImage('37_2-1').then(response=>{
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(response);
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
    dataService.getAns('37_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">문을 닫자마자 안쪽에서 엄청난 힘으로 문을 미는 게 느껴졌고,
          <br></br><br></br>사람은 승훈의 손을 잡고 뛰어간다.
          <br></br><br></br>승훈은 손을 뿌리치며 말한다.
          <br></br><br></br>“잠깐만요. 어디 가시는 거예요!?”
          <br></br><br></br>그 사람의 얼굴은 겁에 질린 표정이었고,
          <br></br><br></br>승훈은 민간인 대피소로 데려간다.
          </div></div>
        <hr className="hline"></hr>
        {this.state.isOpen && (
          <dialog
            className={"popupDialog21"}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image popup21"
              src={this.state.img}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 37]
          <br></br><br></br>포준위가 열심히 회의중이다. 현재 발언 순서를 정하고 있다.
          <br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>          
          <br></br><br></br><br></br>재완 = 0
          <br></br><br></br>지성 *  현수= ?
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