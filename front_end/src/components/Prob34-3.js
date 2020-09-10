import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob34_3 extends Component {
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
    dataService.getAns('34_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">다시 방으로 들어와 묻는다.
          <br></br><br></br>“확신할 수 있으신가요?”
          <br></br><br></br>“네. 좀비는 저희의 존재를 인식하지 못합니다.”
          <br></br><br></br>취조관은 고민하더니 지성과 승훈을 데려간다.
          <br></br><br></br>지성과 승훈이 도착한 곳은 가속기연구소 안에 있는 백신 개발팀이었다.
          <br></br><br></br>“저는 사실 백신 개발팀의 박교수입니다. 백신이 개발되었다는 말을 믿고 데려왔습니다. 여러분의 백신 샘플이 필요합니다.”
          <br></br><br></br>승훈, 지성과 박교수는 백신 개발에 대해 이야기한다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 34]
          <br></br><br></br>왕국을 설립했다 
          <br></br><br></br>철저한 계급사회 
          <br></br><br></br>완벽한 명령체계 
          <br></br><br></br>아늑한 가족생활  
          <br></br><br></br><br></br>아.. 하나를 빠뜨렸다. 
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
          <Link to={("/H1aPJjR3Wb+UUtgdUI9xDQDTO08QEfO5If2sdJb7a6VzB+5Z4+fdtPTU7B5pcNHXXDaGNo6pnbP6HDajJRfIBg==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}