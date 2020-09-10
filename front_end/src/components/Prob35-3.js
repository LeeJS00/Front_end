import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob35_3 extends Component {
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
    dataService.getAns('35_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">“이론상 정밀한 백신을 개발했네요. 훌륭합니다. 하지만 저는 아직 그 백신을 믿을 수 없습니다. 먼저 동물로 임상 테스트를 해보도록 하겠습니다.”
          <br></br><br></br>박교수는 지성과 승훈의 피에서 항체를 추출하였고 이를 쥐에게 투입하였다.
          <br></br><br></br>기대와 달리, 백신을 맞은 쥐는 우리에 들어가자마자 좀비에게 처참히 물려서 죽었다.
          <br></br><br></br>그 광경을 보자마자 박교수의 표정은 일그러졌고 지성과 승훈은 다급해진다.
          <br></br><br></br>그때 지성이 말한다.
          <br></br><br></br>“이 백신은 완벽합니다. 제가 직접 실험에 참가하겠습니다. 저를 실험체로 사용해주세요!”
          <br></br><br></br>고민하던 교수는 이내 고개를 끄덕였고, 실험용으로 기르던 좀비 우리에 지성을 넣기로 했다.
          <br></br><br></br>“행운을 빌어...!”, 박교수와 승훈은 좀비가 있는 방으로 들어가는 지성을 지켜본다.
          <br></br><br></br>지성은 긴장한 채 방 중앙에 선다.
          <br></br><br></br>낌새를 알아챈 좀비가 지성에게 뛰어온다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 35]
          <br></br><br></br>부모 + (the brother of revenge) of (국제보건환경과학위원회) = ?
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
          <Link to={("/iu6KuvSccUcWDhzlk07Jn6wcDayWIRibYVm6ORoXbphvWtmkPr2kqXPdAMLUxWKEWBiJnA7J+VSlq27/9znC9Q==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}