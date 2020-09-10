import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./maze.css"
import dataService from "../services/user.service";

export default class Prob14 extends Component {
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
    dataService.getAns('14',this.state.answer).then(response=>{
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
          <div className="marginbottom">승훈은 완강기 후크를 꺼내 지지대에 건 뒤 줄을 옥상 밖으로 던진다.
          <br></br><br></br>완강기 벨트를 지성에게 걸어준 뒤 말한다.
          <br></br><br></br>“지성아, 금방 뒤따라 갈 테니까 얼른 내려가!”
          <br></br><br></br>지성을 내려 보내자마자 좀비가 문을 부수고 달려온다.
          <br></br><br></br>승훈은 침착하게 벨트를 몸에 묶은 후 벽을 타고 내려간다.
          <br></br><br></br>“지성아, 이제 어디로 가야 할까?”, 승훈이 숨을 고른 후 묻는다.
          </div></div>
        <hr className="hline"></hr>
        <div className="story">
          <div className="marginbottom">[문제 14]
          <br></br><br></br>가장 밝은 별. 속임수. 유일한.
          <br></br><br></br>1*19, blank*12, 7*119 ┘ 1*21, blank*12, 7*117 ┘ 1*24, blank*12, 7*114 ┘ 1*27, blank*11, 7*112 ┘
          <br></br><br></br>1*29, blank*12, 7*109 ┘ 1*32, blank*12, 7*106 ┘ 1*34, blank*12, 7*104 ┘ 1*37, blank*12, 7*101 ┘
          <br></br><br></br>blank*2, 1*37, blank*12, 7*99 ┘ blank*5, 1*37, blank*12, 7*96 ┘blank*8, 1*37, blank*12, 7*93 ┘
          <br></br><br></br>blank*10, 1*37, blank*12, 7*91 ┘ 8*2, blank*11, 1*37, blank*12, 7*88 ┘
          <br></br><br></br>8*5, blank*10, 1*37, blank*12, 7*86 ┘ 8*8, blank*10, 1*37, blank*12, 7*83 ┘ 8*10, blank*11, 1*37, blank*11,
          <br></br><br></br>7*81 ┘ 8*13, blank*10, 1*37, blank*12, 7*78 ┘8*15, blank*11, 1*37, blank*12, 7*75 ┘ 
          <br></br><br></br>8*18, blank*10, 1*37, blank*12, 7*73 ┘8*20, blank*11, 1*37, blank*12, 7*70 ┘ 8*23, blank*11, 1*37, blank*79 ┘
          <br></br><br></br>8*26, blank*10, 1*37, blank*77 ┘8*28, blank*11, 1*37, blank*74 ┘ 8*31, blank*10, 1*37, blank*72 ┘
          <br></br><br></br>8*33, blank*11, 1*106 ┘ 8*36, blank*11, 1*103 ┘ 8*39, blank*10, 1*101 ┘8*42, blank*10, 1*98 ┘
          <br></br><br></br>8*45, blank*9, 1*96 ┘ 8*45, blank*11, 1*94 ┘ 8*43, blank*11, 1*96 ┘ 8*40, blank*11, 1*99 ┘
          <br></br><br></br>8*38, blank*10, 1*102 ┘ 8*35, blank*11, 1*104 ┘ 8*33, blank*10, 1*107 ┘ 8*30, blank*11, 1*37, blank*72 ┘
          <br></br><br></br>8*28, blank*10, 1*37, blank*75 ┘ 8*25, blank*10, 1*37, blank*78 ┘ 8*22, blank*11, 1*37, blank*80 ┘
          <br></br><br></br>8*20, blank*10, 1*37, blank*11, 7*71 ┘ 8*17, blank*11, 1*37, blank*11, 7*74 ┘ 
          <br></br><br></br>8*14, blank*10, 1*37, blank*11, 7*77 ┘8*12, blank*11, 1*37, blank*11, 7*78 ┘ 
          <br></br><br></br>8*10, blank*10, 1*37, blank*11, 7*81 ┘8*7, blank*11, 1*37, blank*11, 7*84 ┘
          <br></br><br></br>8*4, blank*11, 1*37, blank*11, 7*87 ┘8*2, blank*10, 1*37, blank*11, 7*89 ┘
          <br></br><br></br>blank*10, 1*37, blank*11, 7*92 ┘blank*7, 1*37, blank*12, 7*94 ┘blank*5, 1*37, blank*11, 7*97 ┘
          <br></br><br></br>blank*2, 1*37, blank*11, 7*100 ┘1*36, blank*12, 7*102 ┘1*34, blank*11, 7*105 ┘ 
          <br></br><br></br>1*31, blank*12, 7*107 ┘ 1*29, blank*11, 7*110 ┘ 1*26, blank*11, 7*113 ┘ 1*23, blank*12, 7*115 ┘
          <br></br><br></br>1*21, blank*11, 7*118
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
          <Link to={("/df1g62Xze+GSUvzXwL9+0oFtK0RyXFb14UfP+b0tbrCp2FPbwpLeH4RkPMW3Fv/Uka4wK9Z155ZkuN/wktIpGQ==")} ><button className={'btn'}>이동</button></Link>
          </div>
        ))}
      </div>
    );
  }
}