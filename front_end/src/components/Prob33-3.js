import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";



export default class Prob33_3 extends Component {
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
    dataService.getAns('33_4',this.state.answer).then(response=>{
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
          <div className="marginbottom">자신들도 갇힐 수 있다는 생각에 식은땀이 나기 시작한다.
          <br></br><br></br>사람들은 승훈과 지성을 방에 데려온 후 의자에 앉히고 묻기 시작한다.
          <br></br><br></br>“어떻게 지금까지 살아있었나요?”
          <br></br><br></br>“저희는 좀비에게 쫓기며 계속 백신을 연구하고 있었습니다. 방금 저희는 백신 개발에 성공했고 백신을 이곳에 가져왔습니다.”
          <br></br><br></br>지성과 승훈을 취조하던 사람은 잠시 놀란듯한 표정을 짓더니 밖으로 나가 사람들과 이야기한다. 
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 33]
          <br></br><br></br>I ONLY TAKE 3G Class
          <br></br><br></br><text style={{textAlign:"center"}}>ABCABCACABCCC</text>
          <br></br><br></br><text style={{textAlign:"center"}}>BACABCABCACABCAB</text>
          <br></br><br></br><text style={{textAlign:"center"}}>ABBBACBAACBACBACBABABCA</text>
          <br></br><br></br>Answer is?  b0 2개 많고 b- 1개 많고
        </div>        
        </div> 
        {((this.state.link === "/")?(
          <div className="flex-container">
          <form>
            <input
              className="answer"
              placeholder="정답 형식: 영어"
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
          <Link to={("/YnWOSle3b+sfyHg4fE0mOeS/ve0Gr7XyIieDXZ/GO/vTDfNER64h7OaxZZwKvr1xbzUOgcNDmjeZFy3KmwX3jw==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}