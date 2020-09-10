import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";


export default class Prob38_1 extends Component {
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
    dataService.getAns('38_2',this.state.answer).then(response=>{
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
          <div className="marginbottom">진정한 후 승훈과 대화한다.
          <br></br><br></br>“저는 가속기연구소에서 백신을 개발하던 사람이었어요. 며칠 전 저희는 백신을 개발했다고 판단했고, 실험체 좀비에게 투입하여 기대하며 지켜봤어요. 그런데, 몇 시간 뒤 좀비의 힘이 기하급수적으로 세지면서 보안장치를 모두 부숴버렸어요. 주변 사람들은 모두 좀비에게 당했고, 저는 그 좀비를 피해 숨어서 살다가 구해진 거예요.”
          <br></br><br></br>승훈은 가속기연구소의 백신 개발팀도 없어졌다는 사실에 절망한다.
          <br></br><br></br>그때 대피소의 사이렌이 다시 울린다.
          <br></br><br></br>승훈은 달려나가 대피소 문을 열어본다.
          <br></br><br></br>밖에 있던 사람들이 혼란스럽게 대피소 안으로 들어온다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 38]
          <br></br><br></br>Be aware of hearing what you known
          <br></br><br></br>I am so happy to see Jennie. Like a light, object is visible and can not hear any sound. Today is so happy to ride a zebra.
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
          <Link to={("/YbjxGKP6qZkeIhMPvvHdlLoI0JhriUI9BF4cYVTwFjzw0hHEGOWYbGtw5B0R3ao6LB10q0x6VRQR3inj8XuPyA==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}