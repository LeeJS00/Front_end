import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob27_3 extends Component {
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
    dataService.getAns('27_4',this.state.answer).then(response=>{
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
          <div className="marginbottom"> 4층에 도착했다.
          <br></br><br></br>주변을 조심스레 살핀 후, 논문을 찾기 시작한다.
          <br></br><br></br>그러나 비슷한 종류의 논문들과 빼곡히 영어로 적힌 서적들은 머릿속을 헷갈리게 했다.
          <br></br><br></br>“우리 이 속도로는 끝도 없겠다. 흩어져서 찾아보자. 난 저기로 가볼게.”
          <br></br><br></br>“혹시라도 찾으면 계단 앞에서 만나자.”
          <br></br><br></br>지성은 건너편으로 조심히 걸어가 서적을 뒤진다.
          <br></br><br></br>승훈은 잠시 누워 사색에 잠긴다.
          <br></br><br></br>지금 무슨 일이 일어나고 있고, 자신이 무엇을 위해 백신에 집착하는지 생각해본다.
          <br></br><br></br>가족과 친구들의 안위는 확인할 수 없으며 희망도 없는 이곳에서 무작정 백신을 만들고 있는 자신이 안쓰럽기만 하다.
          <br></br><br></br>쉴 틈 없이 달려와 지친 승훈은 피곤함에 잠시 눈을 붙인다.

          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 27]
          <br></br><br></br>문제를 해결하던 도중 하나의 도어락을 발견하였다. 문 여기저기를 살펴보던 중 다음과 같은 숫자를 발견하였다.
          <br></br><br></br>748585878274
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 비밀번호"
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