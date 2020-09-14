import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob37_3 extends Component {
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
    dataService.getImage('37_4-1').then(response=>{
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
    dataService.getAns('37_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">바로 연구소의 생산라인을 가동시켜 백신 대량 생산에 들어간다.
          <br></br><br></br>승훈과 지성은 연구소 안 민간인 대피소에 들어간다.
          <br></br><br></br>가속기연구소엔 사람들이 서로를 도우며 모여있었고, 식량과 물은 마치 이 상황을 대비했다는 듯이 충분했다.
          <br></br><br></br>“지성아, 수고했어.”
          <br></br><br></br>“그러게, 난 우리가 성공할 줄 몰랐어...”
          <br></br><br></br>“우리 이제 안심하고 푹 쉬자.”
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
              alt='no'
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 37]
          <br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 초대코드"
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