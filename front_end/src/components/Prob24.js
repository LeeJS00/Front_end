import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob24 extends Component {
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
  componentDidMount() {
    dataService.goPage(24).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getImage('24-1').then(response=>{
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
    dataService.getAns('24',this.state.answer).then(response=>{
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
          <div className="marginbottom">“이게 뭐지..?”
          <br></br><br></br>“사람들이 좀비를 잡으려고 심어놓은 덫인 것 같아. 우리가 걸렸네…”
          <br></br><br></br>“으… 이럴 시간 없는데… 어떻게 풀지..?”
          <br></br><br></br>지성은 덫을 관찰하다가 글씨를 발견한다.
          <br></br><br></br>“잠깐! 여기 뭔가 써있는데, 암호에 대한 힌트 아닐까?”
          <br></br><br></br>그때 248계단에서 좀비들이 몰려온다.
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
          <div className="marginbottom">[문제 24]
          <br></br><br></br> "와이파이에 연결해야 하는데 같은 사람이 장난을 쳐놓았다."
          <br></br><br></br>paohisdogtbookelightcschoolhspecialkalphabetaelephantsiaddressingsabsorbinglyt
          <br></br><br></br>보안
          <br></br><br></br>네트워크 보안 키 입력
          <br></br><br></br>mbacdecatrcallohappynspriteg<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          
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
        </div>)
      :(<div/>))}
      </div>);
  }
}