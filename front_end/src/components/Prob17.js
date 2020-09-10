import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob17 extends Component {
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
    dataService.getImage('17-1').then(response=>{
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
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
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
    dataService.getAns('17',this.state.answer).then(response=>{
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
          <div className="marginbottom">두 사람은 곧장 편의점 문을 잠근다.
          <br></br><br></br>좀비들은 문에 붙어 미친 듯이 문을 밀고 있었다.
          <br></br><br></br>곧 문에 금이 가기 시작했고, 금방이라도 문이 깨질 것 같아 보였다.
          <br></br><br></br>“승훈아 뒷문으로 뛰어!!” 두 사람은 편의점 뒷문을 통해 나와 무작정 뛰기 시작한다.
          <br></br><br></br>“계단은 좀비들이 잘 오르지 못할 거야! 계단으로 뛰어!!”
          <br></br><br></br>승훈과 지성은 빠르게 78계단 위를 올라간다.
          <br></br><br></br>지성은 숨을 가쁘게 몰아쉰 뒤 물어본다.
          <br></br><br></br>“어디로 가야하지?” 
          <br></br><br></br>“가장 가까운 학생회관으로 들어가자!”
          <br></br><br></br>승훈과 지성은 학생회관 안으로 들어간다.
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
        <div className="story">
          <div className="marginbottom">[문제 17]<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          <br></br><br></br> -the best Metapod in the world
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
          <Link to={("/ZEf6lYS7QUtd6/5BVJoImorL2uYqgqejOrKdL+qbh8Zbj9DTbvj83iJcCOSKws5HhcQ2TC6OgYZEL0Jnh4Xdlg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}