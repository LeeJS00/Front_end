import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob30_1 extends Component {
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
    dataService.getAns('30_2',this.state.answer).then(response=>{
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
        <div className="story">
          <div className="marginbottom">[문제 30]
          <br></br><br></br>-561treasure
          <br></br><br></br>-인류의 마지막 희망은
          <br></br><br></br>200123=4.1
          <br></br><br></br>200321=0
          <br></br><br></br>200510=0
          <br></br><br></br>200222=0.1
          <br></br><br></br><br></br>200725=??
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
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/hEZm/yrVExTByF0bFLxXfnz2/WltYg85Fr/7KA0V1/7zoQbcHeinOFMYKoCj9rk6eK+vZAygDx7cLOj43AXW4A==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}