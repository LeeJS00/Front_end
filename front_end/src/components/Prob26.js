import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob26 extends Component {
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
  
  componentDidMount() {
    dataService.goPage(26).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
    dataService.getImage('26-1').then(response=>{
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
    dataService.getAns('26',this.state.answer).then(response=>{
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
          <div className="marginbottom"> [박태준 학술기념관 (청암)]
          <br></br><br></br>청암 1층에 도착했다.
          <br></br><br></br>청암 1층을 통해 안으로 들어왔다.
          <br></br><br></br>다행히도 좀비들은 회전문을 이용할 정도의 지능을 갖고 있진 않은 것 같다.
          <br></br><br></br>조심스럽게 청암 1층을 둘러본다.
          <br></br><br></br>청암이 조용한 것을 보아 좀비가 들어오지 못한 것 같다.
          <br></br><br></br>승훈과 지성은 쉴 틈도 없이 논문을 찾으러 나선다.
          </div></div>
        <hr className="hline"></hr>
        {this.state.isOpen && (
          <dialog
            className={"popupDialog"}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className={'image popup'}
              src={this.state.img}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
        <div className="story">
          <div className="marginbottom">[문제 26]<br></br><br></br>
          <img alt='small' src = {this.state.img} onClick={this.handleShowDialog} className='imageShow'></img>
          
          <br></br><br></br>나는 본래 태어나기를 흰색으로 태어났어.
          <br></br><br></br>약자들은 움직이지 않는 세상에서 나는 움직이기 시작했지.
          <br></br><br></br>난 약자는 아니지만 어두운 세상의 약자들과 싸우기 위해 이동해.
          <br></br><br></br>어두운 약자들과 싸워서 이기기까지 가장 효율적인 계획을 세워봤어.
          <br></br><br></br>나는 누구일까? 
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
        </div>)
      :(<div/>))}
      </div>);
  }
}