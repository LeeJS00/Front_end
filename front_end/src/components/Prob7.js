import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob7 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.handleShowDialog = this.handleShowDialog.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      isOpen:false,
      link : "/",
      imsrc:null
    };
  }
  handleKeyPress = (e) => {
    if(e.key ==="Enter") {
      this.submit();
    }
  }
  componentDidMount() {
    dataService.getImage('7-1').then(response=>{
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      console.log(response);
      this.setState({ imsrc: "data:;base64," + base64 });
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
    dataService.getAns('7',this.state.answer).then(response=>{
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
          <div className="marginbottom">“태호는 1학년 때부터 같은 분반이었던 친구예요. 같은 과에 와서 지금까지도 친하게 지내고 있어요.”
          <br></br><br></br>“아, 그렇군요… 저도 분반 친구들이랑 친했는데… 지금은 모두 어떻게 됐는지 모르겠네요.”
          <br></br><br></br>“잘 있을 거예요. 걱정하지 마세…. 응?”
          <br></br><br></br>갑자기 어디선가 문을 두드리는 소리가 들린다….
          <br></br><br></br>“쿵…... 쿵……. 쿵…….”
          <br></br><br></br>“이게 무슨 소리죠..?”
          <br></br><br></br>“그러게요. 앗!!”
          <br></br><br></br>태호가 있던 방문이 부서지더니, 태호가 뛰쳐나와 지성을 공격한다.
          <br></br><br></br>지성은 다행히 태호의 공격을 피했고, 승훈은 초점 잃은 태호의 눈을 보아 아까 자신의 생각이 맞음을 확신한다. 
          <br></br><br></br>“지성아! 태호도 감염된 것 같아!!”
          <br></br><br></br>“아니야. 말도 안돼… 그럴 리가 없어!!”</div></div>
        <hr className="hline"></hr>
        {this.state.isOpen && (
          <dialog
            className={"popupDialog"}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className="image popup"
              src={this.state.imsrc}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 7]<br></br><br></br>
          <img alt='small' src = {this.state.imsrc} onClick={this.handleShowDialog} className='imageShow'></img>
          
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 영어단어"
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
          <Link to={("/2QnAedbnQBy3eym85P4wtfzg9Qp9arnMBPNr6uqIyTi96OeIPJlR3Sagv7x4L/u4fc8z9cdb0MjlNtKIkq1cFg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}