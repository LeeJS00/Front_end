import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob21 extends Component {
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
      img:null
    };
  }
  componentDidMount() {
    dataService.getImage('21-1').then(response=>{
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
    dataService.getAns('21',this.state.answer).then(response=>{
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
          <div className="marginbottom">승훈은 어지러운 정신을 차리고 옆에 떨어진 유리조각을 집는다.
          <br></br><br></br>밧줄을 현수 몰래 끊기 시작했고, 현수는 지성을 좀비에게 끌고 가고 있다.
          <br></br><br></br>“잠깐, 얘기 좀 해! 우리는 백신을 만들고 있어. 우리가 사라진다면 인류는 정말 끝이야!”
          <br></br><br></br>“백신...? 백신이 정말로 개발될 수 있으면 진작에 만들어졌겠지! 내가 관찰한 좀비는 기형 생물체 그 자체야. 백신이 나올 수 없는 존재들이라고!”, 현수가 소리친다.
          <br></br><br></br>“그러니까... 너희도 희망을 버려.”
          <br></br><br></br>“아니야. 내 백신은 거의 만들어졌어. 희망이 있다고!”, 대화를 통해 승훈은 최대한 시간을 끈다.
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
              alt='no' 
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 21]<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow2'></img>          
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
      </div>
    );
  }
}