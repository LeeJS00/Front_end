import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob28_2 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      link : "/",
      answer:"",
      isOpen:false,
      img:null
    };
  }
  
  componentDidMount() {
    dataService.getImage('28_3-1').then(response=>{
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
    dataService.getAns('28_3',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="story">
          <div className="marginbottom"> 하지만 몇 분 지나지 않아 아래서 유리가 깨지는 소리에 잠을 깬다.
          <br></br><br></br>좀비들이 1층 문을 깨고 들어온 것이었다.
          <br></br><br></br>“승훈아! 계단으로 뛰어!!”
          <br></br><br></br>지성은 승훈 쪽으로 달려왔고, 함께 계단을 오르기 시작한다.
          <br></br><br></br>승훈과 지성은 계단을 타고 5층으로 올라간다.
          <br></br><br></br>5층에 올라와 문을 향해 달린다.
          <br></br><br></br>회전문을 통해 밖으로 나온 후 죽을힘을 다해 목적지 없이 뛴다.
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
          <div className="marginbottom">[문제 28]
          <br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow2'></img>
          
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
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/IouJYkICcGX1Jp2/c9OEGIdusGbKH+//qclU3P0fY5io27M1yO/t0WbYjp4fAENuOTO7Ta6CWxMxhjaSyybL9Q==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}