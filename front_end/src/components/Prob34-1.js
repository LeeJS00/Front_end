import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob34_1 extends Component {
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
    dataService.getAns('34_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">“백신 개발하신다고 하셨죠..?”
          <br></br><br></br>“네.. 비록 실패했지만, 앞으로도 계속할 예정입니다.”
          <br></br><br></br>“다른 사람들에게는 비밀인데, 가속기연구소 안에 백신 개발팀이 있어요.”
          <br></br><br></br>그 말을 들은 승훈은 감사하다는 말을 건넨 후, 연구소 깊숙한 곳으로 들어간다.
          <br></br><br></br>[외부인 출입금지]라는 문구가 쓰인 수상한 문이 있다.
          <br></br><br></br>승훈은 문을 두드려 보지만 안쪽에서 인기척이 느껴지지 않는다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 34]
          <br></br><br></br>가면을 쓰고 분장을 하여 내 정체를 숨기고,
          <br></br><br></br>그제서야 나는 춤을 추고 논다.
          <br></br><br></br>이 영화 같은 삶 속에서,
          <br></br><br></br>너가 나를 이렇게 불렀을 때 비로소 내가 살아있음을 느낀다.
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
          <Link to={("/4TT7E1v1l2IxgWipQP+fH4jEkzNfmM1rryC7QDM+hE/jAO1zPT6sGyU0MqXEgldFsJYWB1rmAZmp5gmYfAbQRQ==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}