import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob28_3 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      answer:"",
      link : "/",
    };
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
    dataService.getAns('28_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">하지만 몇 분 지나지 않아 아래서 유리가 깨지는 소리에 잠을 깬다.
          <br></br><br></br>좀비들이 1층 문을 깨고 들어온 것이었다.
          <br></br><br></br>“승훈아! 계단으로 뛰어!!”
          <br></br><br></br>지성은 승훈 쪽으로 달려왔고, 함께 계단을 오르기 시작한다.
          <br></br><br></br>승훈과 지성은 계단을 타고 5층으로 올라간다.
          <br></br><br></br>5층에 올라와 문을 향해 달린다.
          <br></br><br></br>회전문을 통해 밖으로 나온 후 죽을힘을 다해 목적지 없이 뛴다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 28_4층을 골랐을 때]
          <br></br><br></br>口 道 小 大 ?
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
          <Link to={("/xN276Ar+zHm490MX1aeAizi5TN+K+7nW6sXjHBnR2EYQA/epfknyLtTvp60xTso7pT6O5ZmCAqUF077fycy8Tw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}