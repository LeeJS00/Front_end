import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob25 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.handleShowDialog2 = this.handleShowDialog2.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
      isOpen:false,
      isOpen2:false,
      img:null,
      img2:null
    };
  }
  componentDidMount() {
    dataService.getImage('25-1').then(response=>{
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(response);
      this.setState({ img: "data:;base64," + base64 });
    });
    dataService.getImage('25-2').then(response=>{
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(response);
      this.setState({ img2: "data:;base64," + base64 });
    });
  }
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
  }
  handleShowDialog = () => {
    this.setState({ 
      isOpen: !this.state.isOpen,
      isOpen2: false
    });
  };
  handleShowDialog2 = () => {
    this.setState({ 
      isOpen: false,
      isOpen2: !this.state.isOpen2
    });
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
    dataService.getAns('25',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });;
  }

  render() {
    return (
      <div>
        <div className="story">
          <div className="marginbottom">“풀렸다! 뛰자!!”
          <br></br><br></br>지성과 승훈은 청암 5층으로 들어가려다 좀비가 따라오는 것을 본다.
          <br></br><br></br>“이대로면 청암까지 따라올 거야. 우선 좀비들을 따돌리자.”, 지성이 말한다.
          <br></br><br></br>좀비를 따돌리기 위해 청암 5층으로 바로 들어가지 않고, 108계단을 내려간다.
          <br></br><br></br>108계단을 내려가 C5에 도착한다.
          <br></br><br></br>다행히 C5의 문은 열려있었으며 그곳에서 숨을 돌린다.
          <br></br><br></br>C5에 숨어 좀비를 따돌린 후 길을 건너 청암 1층에 도착한다. 
        </div></div>
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
        {this.state.isOpen2 && (
          <dialog
            className={"popupDialog"}
            open
            onClick={this.handleShowDialog2}
          >
            <img
              className="image popup"
              src={this.state.img2}
              onClick={this.handleShowDialog2}
              alt="no"
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 25]<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          <br></br><br></br>
          <img alt='small2' src = {this.state.img2} onClick={this.handleShowDialog2} className='imageShow2'></img>
          <br></br><br></br>B3 H4H5 B2 S2A8 
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
      </div>
    );
  }
}