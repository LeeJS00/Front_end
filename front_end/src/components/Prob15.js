import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob15 extends Component {
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
    dataService.getAns('15',this.state.answer).then(response=>{
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
          <div className="marginbottom">“지금 우리 백신 개발 마무리 단계인데, 여기에 필요한 시약 정보를 아까 무은재 기념관에서 찾아보니 없었어. 빨리 자료를 찾아야 하는데 청암에 있는 것 같아.”
          <br></br><br></br>“아까 청암 주변에 좀비들이 몰려있는 거 봤잖아. 그런데 우리가 갖고 있던 식량과 필요한 여러 장비도 다 놓고 왔어..”
          <br></br><br></br>“생존에 필요한 물품이 있는 곳이라... 그럼 먼저 지곡회관 편의점에 들어가서 구해보자.”
          <br></br><br></br>예상대로 좀비들이 밖을 에워싸고 있다.
          <br></br><br></br>조심스럽게 좀비들 사이를 지나 편의점에 도착했지만, 편의점 문은 굳게 잠겨있다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 15]
          <br></br><br></br>우리는 늘 서로에게 끌려
          <br></br><br></br>하지만 우리는 둘 다 너무 이기적이야.
          <br></br><br></br>우리 사이는 더 멀어지지도, 가까워지지도 않아
          <br></br><br></br>너가 보는 우리 관계와 남들이 보는 우리 관계는 달라.
          <br></br><br></br>얼마나 다른 것 같아?
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
              onKeyPress={this.handleKeyPress}
            />
            </form>
            <button className={'btn'} onClick={this.submit}>확인</button>
          </div>
        ):(
          <div className='center'>
          <Link to={("/fbcBSdrFVh5BGiAmKdBoMrBrfo3+9hCG/54JIkWfvhSmnVZc+Dj9Q2gf2ymmmL/jd4Yblm0SQWKYmXhDggv9tw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}