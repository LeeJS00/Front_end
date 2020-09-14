import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob9 extends Component {
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
    dataService.getAns('9',this.state.answer).then(response=>{
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
          <div className="marginbottom">승훈은 지성과 태호를 보며 교수님이 해주신 말씀을 떠올린다.
          <br></br><br></br>‘좀비가 되면 그 전에 모든 기억을 잃는다. 그러니 좀비가 된 이상 다른 생명체야.’
          <br></br><br></br>하지만 태호는 지성이를 보고 머뭇거리는 것 같다.
          <br></br><br></br>그러나 지성은 좀비가 된 태호를 더 이상 어떻게 할 수 없다는 것을 잘 알고 있다.
          <br></br><br></br>급하게 무언가를 찾은 지성은 결의에 찬 눈빛으로 호신용 칼을 집어 든다.
          <br></br><br></br>“미안해 더 이상 같이 못 있을 것 같아...”</div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 9]
          <br></br><br></br>-02)
          <br></br><br></br>-From ㅅ1000
          <br></br><br></br>-1 7 3 6+0
          <br></br><br></br>Where am I???
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
      </div>
    );
  }
}