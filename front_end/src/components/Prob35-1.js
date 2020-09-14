import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob35_1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
      response:false
    };
  }
  componentDidMount() {
    dataService.goPage(35).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
  }
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
    dataService.getAns('35_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">‘뭐지…?’
          <br></br><br></br>승훈은 문을 크게 두드린 후 소리쳐 본다.
          <br></br><br></br>“안에 누구 없나요!?”
          <br></br><br></br>그래도 인기척이 없자 승훈은 돌아간다.
          <br></br><br></br>‘이곳이 아닌가..?’
          <br></br><br></br>그때 안쪽에서 문을 치는 소리가 들린다. 
          <br></br><br></br>‘쿵..!!’
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 35]
          <br></br><br></br>Ⅵ += Ⅷ
          <br></br><br></br>ⅩⅠ == Ⅰ
          <br></br><br></br>Ⅶ -= Ⅸ
          <br></br><br></br>Ⅸ ¤= a
          <br></br><br></br>Ⅳ == b
          <br></br><br></br>a ¤ b = ?
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