import React, { Component } from "react";
import { Link} from "react-router-dom";
import dataService from "../services/user.service";
import "./maze.css"

export default class Prob13 extends Component {
  constructor(props) {
    super(props);
    this.onChangeAnswer = this.onChangeAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      answer:"",
      link : "/",
      response:false
    };
  }
  componentDidMount() {
    dataService.goPage(13).then(res=> {
      if(res.data.r === true) {
        this.setState({
          response:true
        })
      }
    })
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
    dataService.getAns('13',this.state.answer).then(response=>{
      this.setState({
        link: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });;
  }

  render() {
    return (<div>
      {((this.state.response) ? (
      <div>
        <div className="story">
          <div className="marginbottom">옥상에 들어온 후 문을 잠근다.
            <br></br><br></br>그러나 부실해 보이는 문은 좀비들의 힘에 금세 부서질 것 같다.
            <br></br><br></br>어쩔 수 없이 급히 나무판자들을 문 앞에 겹쳐놓고 문에서 가장 멀리 떨어진 곳으로 뛰어가 보지만 내려갈 방법은 없어 보인다.
            <br></br><br></br>더 이상 물러설 곳이 없는 승훈과 지성은 옥상에서 벗어날 방법을 생각한다. 
            <br></br><br></br>그때 벽에 있던 완강기 키트가 승훈의 눈에 들어온다.
            <br></br><br></br>“지성아, 이거 타고 내려가야 할 것 같아.”
            <br></br><br></br>“나 이거 한 번도 타 본 적 없는데…”
            <br></br><br></br>“지금은 어쩔 수 없어. 나갈 방법이 이것 밖에 없다고!”
            <br></br><br></br>승훈과 지성은 빠르게 완강기를 꺼낸다.
            <br></br><br></br>하지만 비밀번호가 걸려있다.“좀비들이 냄새를 맡고 다시 몰려올 거야 어서 다른 장소로 가자.” 
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 13]
          <br></br><br></br>Isolated system will exist, and open system will not exist.

          <br></br><br></br>Love yourself.
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
          <Link to={this.state.link} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
        </div>)
      :(<div/>))}
      </div>);
  }
}