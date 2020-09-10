import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob31_3 extends Component {
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
    dataService.getAns('31_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">좀비들이 실험실 문을 뚫고 들어온다.
          <br></br><br></br>자신들이 만든 백신을 투입한 지성과 승훈은 눈을 감고 운명에 몸을 맡긴다.
          <br></br><br></br>좀비들은 승훈과 지성 바로 옆에서 잠시 두리번거리더니 이곳저곳을 다시 살펴본다.
          <br></br><br></br>지성과 승훈의 존재를 알아채지 못하고, 움직여도 눈치채지 못하는 듯하다.
          <br></br><br></br>“우리가 해냈어. 지성아!”
          <br></br><br></br>“그래! 얼른 대피소로 가자!”
          <br></br><br></br>백신 개발에 성공했다고 판단한 지성과 승훈은 곧장 샘플들을 가지고 가속기연구소를 향해 달려간다.
          <br></br><br></br>가속기연구소 정문에는 암호가 걸려있었고, 지성과 승훈은 차분히 암호를 해결해 나간다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 31]
          <br></br><br></br>62  2286822 / 62  2466826 / 62  22 / 26  6822462  2684 / 0  22  62426
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
          <Link to={("/mwcpCzTNHoFyb9fgKSzJiN4t1zhGWA/OsLKn9SyMnR0hbaRlnHCPaJOZXCpwhAnB96MHEQHP1b6tiMgqLmqwaw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}