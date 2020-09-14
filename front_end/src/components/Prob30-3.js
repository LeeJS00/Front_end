import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob30_3 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
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
    dataService.goPage(30).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getImage('30_4-1').then(response=>{
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
    dataService.getAns('30_4',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 자물쇠가 풀렸다. 상자 안에는 바이러스에 관한 수많은 연구논문이 있었으며 현재 KAVID-99에 맞는 연구논문을 찾기 시작한다.
          <br></br><br></br>예상대로 우리가 원하던 내용이 들어있었고, 즉시 실험을 재개한다.
          <br></br><br></br>논문을 따라 약품을 제조한 후 백신 샘플에 투입한다.
          <br></br><br></br>그때, 어디서 들어왔는지 모르는 좀비들이 잠긴 실험실 문을 뚫고 들어오려 한다.
          <br></br><br></br>“화학관 안에 있던 좀비들 같아!! 제대로 확인했어야 했는데...”
          <br></br><br></br>승훈과 지성은 어쩔 줄 몰라 하고, 문은 계속해서 밀린다.
          <br></br><br></br>금방이라도 부서질 것 같은 문을 바라보며 승훈과 지성은 그들이 만든 백신을 믿기로 한다.
          <br></br><br></br>각자 자신의 몸에 백신을 투입한다.
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
          <div className="marginbottom">[문제 30]
          <br></br><br></br>
          <img alt="small" src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          <br></br><br></br>{"{12(2+), 26(2+)} * 2 + 14 + 8 * 4 ~ 13 * 2 + 8 * 3"}
          <br></br><br></br>921,600 
          <br></br><br></br>:113226
          <br></br><br></br>:110379
          <br></br><br></br>:?
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