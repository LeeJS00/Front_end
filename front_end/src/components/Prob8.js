import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob8 extends Component {
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
    dataService.getAns('8',this.state.answer).then(response=>{
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
          <div className="marginbottom">지성은 태호에게 조심스럽게 다가간다.
          <br></br><br></br>“태호야 내 말 들어봐 어?”
          <br></br><br></br>태호는 아무 대답이 없었고, 대신 초점 잃은 눈동자는 허공을 응시할 뿐이었다.
          <br></br><br></br>“지성아 방법이 없어. 우리가 도망쳐야 할 것 같아! 앞으로 좀비들이 더 몰려올 거야!”
          <br></br><br></br>지성은 오랜 친구였던 태호가 감염됐다는 사실을 받아들이지 못하는 듯하다.
          <br></br><br></br>그때 완전히 좀비로 변한 태호가 지성한테 달려든다.
          <br></br><br></br>“태...태호야… 제발 그러지 마. 나 지성이야!!</div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제8]
          <br></br><br></br>65 = 1
          <br></br><br></br>3377117 6655443
          <br></br><br></br>7766554 7766554
          <br></br><br></br>3377117 6655443
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
          <Link to={("/rZlOrv3m1azPpKJLiaDHk8Mj4b43plBPAp9aqk1c4lBiv9B/VUIEhaLUTEzfqIe5eJSmJjYLxIQMyVU6VD0H0g==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}