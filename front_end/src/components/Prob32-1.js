import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob32_1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      answer:"",
      link : "/",
      isOpen:false,
      img:null
    };
  }
  componentDidMount() {
    dataService.getImage('32_2-1').then(response=>{
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
    dataService.getAns('32_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">가속기연구소 사람들은 승훈을 들여보내고, 지금껏 승훈의 백신 개발 과정을 듣는다.
          <br></br><br></br>백신 개발에 실패했다는 사실에 사람들은 절망한다.
          <br></br><br></br>그때, 승훈을 따라오던 좀비 하나가 대피소의 문을 두드린다.
          <br></br><br></br>‘쿵…..쿵….’
          <br></br><br></br>승훈은 곧바로 출입문 옆에 보이는 비상벨을 누른다.
          <br></br><br></br>가속기연구소 안 사람들은 순식간에 공황에 빠진다.
          <br></br><br></br>그때 누군가 소리친다.
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
          <div className="marginbottom">[문제 32]
          <br></br><br></br>
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
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/V8CnHqaHhJglXgZzsbvXgVCEqBF0gtb6wzJ98v9z3J81Xc7ZhrLiXVDadI0RbNvVyRyRlOSyhu+Z42GlWGakxw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}