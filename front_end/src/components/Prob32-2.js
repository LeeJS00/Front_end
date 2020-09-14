import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob32_2 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
    };
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
    dataService.getAns('32_3',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 지성과 승훈은 백신을 개발했음에 확신하고 곧장 가속기연구소로 달려간다.
          <br></br><br></br>가면서 승훈과 지성은 목숨을 걸고 실험 하나를 더 한다.
          <br></br><br></br>그들의 몸에 향수를 뿌리기로 한 것이다.
          <br></br><br></br>“눈치채지 못할 거야. 난 우리 백신을 믿어.”
          <br></br><br></br>가속기연구소까지 가면서 온몸에 퍼진 향수 냄새에 좀비들은 몰려왔지만
          <br></br><br></br>그 어떤 좀비도 지성과 승훈을 눈치채지 못했으며, 뒤만 졸졸 따라다니고 있었다.
          <br></br><br></br>“좋았어! 이제 좀비들을 멀리 보내고 가속기연구소로 가자.”
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 32]
          <br></br><br></br>R a I n B o W  
          <br></br><br></br><br></br> G70
          <br></br><br></br>G80
          <br></br><br></br>G90
          <br></br><br></br>We don’t have sister .
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