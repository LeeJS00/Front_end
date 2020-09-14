import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob18 extends Component {
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
    dataService.getAns('18',this.state.answer).then(response=>{
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
          <div className="marginbottom">[학생회관]
          <br></br><br></br>“1층 창고에 쓸만한 게 있을 거야.”
          <br></br><br></br>학생회관을 탐색하던 승훈과 지성은 인기척을 느낀다.
          <br></br><br></br>학생회관 2층에서 사람을 발견할 수 있었고 오랜만에 만난 생존자에 마음이 들떠 대화를 한다.
          <br></br><br></br>“저는 현수예요. 마산에서 백신을 연구하고 있었는데 연구실이 폐쇄되어서 포스텍으로 도망쳤어요. 동료를 모두 잃고 저 혼자 남았죠. 여기에는 아직 좀비가 없는 것 같아요. 다행히 식량 창고를 찾아서 그 음식을 먹고 버텼어요. 혹시 여러분들도 백신을 연구하세요?”
          <br></br><br></br>“네, 저희도 생명공학연구센터에서 여기까지 도망쳐 왔어요.”
          <br></br><br></br>“그렇다면 제가 연구한 내용 같이 보러 가요!”
          <br></br><br></br>“좋습니다..!”
          <br></br><br></br>생존을 위해 좀비에 대한 정보가 필요한 지성과 승훈은 현수를 따라간다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 18]
          <br></br><br></br>-in four square
          <br></br><br></br>First is down.
          <br></br><br></br>Second is change.
          <br></br><br></br>Third is lost.
          <br></br><br></br>What is the color of the third?
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 영어소문자"
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