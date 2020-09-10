import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/0_home";
import Prob1 from "./components/Prob1";
import Prob2 from "./components/Prob2";
import Prob3 from "./components/Prob3";
import Prob4 from "./components/Prob4";
import Prob5 from "./components/Prob5";
import Prob6 from "./components/Prob6";
import Prob7 from "./components/Prob7";
import Prob8 from "./components/Prob8";
import Prob9 from "./components/Prob9";
import Prob10 from "./components/Prob10";
import Prob11 from "./components/Prob11";
import Prob12 from "./components/Prob12";
import Prob13 from "./components/Prob13";
import Prob14 from "./components/Prob14";
import Prob15 from "./components/Prob15";
import Prob16 from "./components/Prob16";
import Prob17 from "./components/Prob17";
import Prob18 from "./components/Prob18";
import Prob19 from "./components/Prob19";
import Prob20 from "./components/Prob20";
import Prob21 from "./components/Prob21";
import Prob22 from "./components/Prob22";
import Prob23 from "./components/Prob23";
import Prob24 from "./components/Prob24";
import Prob25 from "./components/Prob25";
import Prob26 from "./components/Prob26";
import Prob27 from "./components/Prob27";
import Prob27_1 from "./components/Prob27-1";
import Prob27_2 from "./components/Prob27-2";
import Prob27_3 from "./components/Prob27-3";
import Prob28_1 from "./components/Prob28-1";
import Prob28_2 from "./components/Prob28-2";
import Prob28_3 from "./components/Prob28-3";
import Prob29_1 from "./components/Prob29-1";
import Prob29_2 from "./components/Prob29-2";
import Prob29_3 from "./components/Prob29-3";
import Prob30_1 from "./components/Prob30-1";
import Prob30_2 from "./components/Prob30-2";
import Prob30_3 from "./components/Prob30-3";
import Prob31_1 from "./components/Prob31-1";
import Prob31_2 from "./components/Prob31-2";
import Prob31_3 from "./components/Prob31-3";
import Prob32_1 from "./components/Prob32-1";
import Prob32_2 from "./components/Prob32-2";
import Prob32_3 from "./components/Prob32-3";
import Prob33_1 from "./components/Prob33-1";
import Prob33_2 from "./components/Prob33-2";
import Prob33_3 from "./components/Prob33-3";
import Prob34_1 from "./components/Prob34-1";
import Prob34_2 from "./components/Prob34-2";
import Prob34_3 from "./components/Prob34-3";
import Prob35_1 from "./components/Prob35-1";
import Prob35_2 from "./components/Prob35-2";
import Prob35_3 from "./components/Prob35-3";
import Prob36_1 from "./components/Prob36-1";
import Prob36_3 from "./components/Prob36-3";
import Prob37_1 from "./components/Prob37-1";
import Prob37_3 from "./components/Prob37-3";
import Prob38_1 from "./components/Prob38-1";
import Prob39_1 from "./components/Prob39-1";
import End1 from "./components/End-1";
import End2 from "./components/End-2";
import End3 from "./components/End-3";
import End from "./components/End";
import User2 from "./components/User2";
import User3 from "./components/User3";
import User4 from "./components/User4";
import mainLogo from './method-draw-image.svg'

class App extends Component {
  render() {
    return (
      <Router history="history">
        <div className="background-black">
          <nav className="navbar navbar-expand navbar-dark navbar_">            
            <img alt='logo' src = {mainLogo} className="logo"></img>
            <div className='pocahome'>
              <a href= 'https://google.com' className='pocahome'> 포카전 홈 </a>
            </div>            
          </nav>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/Prob1" component={Prob1} />
              <Route exact path="/FhMpzpW1M6/MhzAdO5PyGbtvGhL9TbBefub71YI8ZDR9+K+up36Eq+uCaNuGH5fZqLzvUDH5wG3vnL/uu+5xbA==" component={Prob2} />
              <Route exact path="/EYU99A9LK5GdOBX2R5LljQhmN2eklLy7OMCyOJ2RQLuxcCgbSoR753V73hLJzQBUzjZS0K06GgySurtpeYJG7g==" component={Prob3} />
              <Route exact path="/57YIXFWY0G7LsQXIzLe/tB/L5g6nv8EQ+FpEQ8VT+4ExjqVJ4e4hXTUdamiD8w4o8aAhG+0N7frL10ry6vdsVw==" component={Prob4} />
              <Route exact path="/PriOFQpNKjUcfNy75tvg5UkzncZR3tq6Oe5fU/leYU+t2VnGlALO+72I5Q76HFgRUo6bTJ3aE3/6TI2qtaH7EQ==" component={Prob5} />
              <Route exact path="/Qwu3PGVyJnc055fQ7RU2LHCA5Ctcq3ipoc66qUZnPbKGngLAlNBCuun3DajzMWH6u7kgkJDJQieWpdniQkvHFQ==" component={Prob6} />
              <Route exact path="/2Xz58ndH9TOfXfCd10Tqw10QS2BeqRHxIHv2iouufYmNSRHgxqJuva8am4gb76WyMYzr+fJp0VzURhtYOLDMSA==" component={Prob7} />
              <Route exact path="/2QnAedbnQBy3eym85P4wtfzg9Qp9arnMBPNr6uqIyTi96OeIPJlR3Sagv7x4L/u4fc8z9cdb0MjlNtKIkq1cFg==" component={Prob8} />
              <Route exact path="/rZlOrv3m1azPpKJLiaDHk8Mj4b43plBPAp9aqk1c4lBiv9B/VUIEhaLUTEzfqIe5eJSmJjYLxIQMyVU6VD0H0g==" component={Prob9} />
              <Route exact path="/UuSpZbPNbHnfRIMtfkyc1UrP4iHEFQdNdMAFdVmDuoAFAkHWo4j3GhvlMPY6rQcPEJF+k+8TMHjpF30vw+nBfA==" component={Prob10} />
              <Route exact path="/cZNaQURuhX9WnwUGu/nK3wC1l4fxvN4wTzdYM1XdOhBuwPyhVnStPuFPuW6ueH1nRo92jKNzgtSF+r8EEybxKA==" component={Prob11} />
              <Route exact path="/FDdgKwda7bi5Ypf44yvW4Hj/jFN7yNI0/xDEPKnOvg5nV3zE4Ixx5F3Jn1R7BHJ93CmMgOPyvZISMMRqJPWULA==" component={Prob12} />
              <Route exact path="/dKScaY29PBLjawsodEfYM/dPOTf/Ey6/9wVLqhhiPDWnBbsYuC4qwDhLUSfblwFuY2CfcSvJDjUGz76pdZn0bw==" component={Prob13} />
              <Route exact path="/vdpNCIYWXgIaSbq9OZGmbL0l8qM5ahkeo1XxvAX+6G7qJEFFKT209ecu+Eua1CD9ZkkVYp9bUUlJNH5e2hlN/w==" component={Prob14} />
              <Route exact path="/df1g62Xze+GSUvzXwL9+0oFtK0RyXFb14UfP+b0tbrCp2FPbwpLeH4RkPMW3Fv/Uka4wK9Z155ZkuN/wktIpGQ==" component={Prob15} />
              <Route exact path="/fbcBSdrFVh5BGiAmKdBoMrBrfo3+9hCG/54JIkWfvhSmnVZc+Dj9Q2gf2ymmmL/jd4Yblm0SQWKYmXhDggv9tw==" component={Prob16} />
              <Route exact path="/8kIqsYie3LZ3rao0MRqePjTsmGUNgkztlsGnIeaxcCEPHHwyBYTT1WOdTZR3jaIwoknNtEmM3K+BD+JlBokwsg==" component={Prob17} />
              <Route exact path="/ZEf6lYS7QUtd6/5BVJoImorL2uYqgqejOrKdL+qbh8Zbj9DTbvj83iJcCOSKws5HhcQ2TC6OgYZEL0Jnh4Xdlg==" component={Prob18} />
              <Route exact path="/vMdXQBSEtcc7WYqKaDYL1BKunKksqSwX2mf5pZLIm0SjcvtOLwMCuXlbRK1PZ3qtjDFzXz9zzrDgQkOj0UrGqQ==" component={Prob19} />
              <Route exact path="/vQ9/SNCMI32hRAFNfo9J+gHYhKVis4c5H9XtuWek1by2gasi5Jk8YKzoR1QsLZOmBB3CMdngrnb+vjX18NJjcA==" component={Prob20} />
              <Route exact path="/owszkC3xL60EhKpwcVf1sTsvYlDaLSJpYLb8rGeN+iyaxV49/1noeXg3nAY5rNzbjVkv3yGlP8DHQvxt0qFMbw==" component={Prob21} />
              <Route exact path="/odxHFBaXY+4owWb4CFMinGF4ntbb31ZxArEIgmah2RrsUK5fQmQJG83ZH5W/PTPvlSAAYcGHHD7ugcTB0vCleQ==" component={Prob22} />
              <Route exact path="/5gzfxne3U9vftgaspMp9ma+1GgaPh8suUFkKDUQQlnIjqOlpsklg57w21jcqHKJ0gFJl0ho3BlqFLPxCvkNvLg==" component={Prob23} />
              <Route exact path="/CdBRMql9fj9DNLAH1M0Q0RX1vwjhLkKT7SvwuJY0Z9jvOlLKG/m18t21i27VJuqzyEp9cZOPlAp3/xj7UrCCRg==" component={Prob24} />
              <Route exact path="/aDUyU4wV2Yfiqgc/ZLVQXVTf4tOi1GyDHIzS8A0tRIjs9+3dyKl1WKXZ7P0ru3Laffhp60y1bwub3fV+M9FrxA==" component={Prob25} />
              <Route exact path="/I9IW6krYb39jCo7TU+2tXLhJSKT1YkeR4PHbd8F4p2/gO6tdM0L8M7aKlkL/irISeh/3uI5kCBLIjdfT0GDz9Q==" component={Prob26} />
              <Route exact path="/rZDUht50KSaMuaYH9Xrzr5fp3iFWMWNOkcuOaKyYpKUSx8MSWZd5SmWkAInCtr3vIUDNd9z60if78vi0MxJCvA==" component={Prob27} />
              <Route exact path="/5tjfkqMBOglbljbem18VpOXd8I4y0eFtxnhXCdcACYg=" component={Prob27_1} />
              <Route exact path="/EB1nhJaYZKBtmxe1a+DKgjjrNJx9GwxYXX9F2hFs32g=" component={Prob27_2} />
              <Route exact path="/FTKJAQCLxD1Yb8FXgXwAKLeyu8Z0GesHJE49DayHbow=" component={Prob27_3} />
              <Route exact path="/UemypSRUEtZItZnLp8NSSm0sKYxpR5r6Bp2shmcr7YR28uKCutDKxqcMkt7Ioqitki1mL33j+vcNbRJWelVE/w==" component={Prob28_1} />
              <Route exact path="/fsgEClI7MCvWpu6Binn8JSCPmfk3+4NkREgT4JSYtdMcGPZ8y33MefPDzuxyTExyb4VZMZt/DXw/jeJpZfc7lA==" component={Prob28_2} />
              <Route exact path="/6wf+zFj5w5KEQzryrKU57kw9C0HHcKHdN96FVK4mYwqJhZm1Z7P2m9ShzW/KpaDGr5V36UxoGFaMtKxJjmE2pg==" component={Prob28_3} />
              <Route exact path="/YC46YlnW0TZ6zbtbTXe3vHuYhnEOATek77iOvwM1okVv1onIajICuJ9cHZXZ7UxRF3hBo3EzBAHRRuBfVTFefw==" component={Prob29_1} />
              <Route exact path="/IouJYkICcGX1Jp2/c9OEGIdusGbKH+//qclU3P0fY5io27M1yO/t0WbYjp4fAENuOTO7Ta6CWxMxhjaSyybL9Q==" component={Prob29_2} />
              <Route exact path="/xN276Ar+zHm490MX1aeAizi5TN+K+7nW6sXjHBnR2EYQA/epfknyLtTvp60xTso7pT6O5ZmCAqUF077fycy8Tw==" component={Prob29_3} />
              <Route exact path="/VFHHgvHN/0M3u0pHKA0QQYhwtJl/qCx0ih90/p/eKnVQStg/la0JWV5tSLrM1ZqXGT6dMXVtqtrpP4cCYOSvHA==" component={Prob30_1} />
              <Route exact path="/Xr2n9czHy9Flhj6YzV4/6S2Ek0Bwme+kIXzT5BhXzBgqjQAtlS2OOKg7atFA1DaWSa36VbPvcWAnGKozQ8jqTg==" component={Prob30_2} />
              <Route exact path="/BHjZj+I6r0OnOA/jhoENyuy8KnEtYao3zWnThnM4YsbJGzytVlzf5sneD50ioskeXHDlCgfIrYl/1EuC5hGYpw==" component={Prob30_3} />
              <Route exact path="/hEZm/yrVExTByF0bFLxXfnz2/WltYg85Fr/7KA0V1/7zoQbcHeinOFMYKoCj9rk6eK+vZAygDx7cLOj43AXW4A==" component={Prob31_1} />
              <Route exact path="/UVmNwCk7UU+iHOFyZ5aBT+h0U4yteIyqhXdbo0Z0vAX8FS5NJnggt7Khgf6tg9/qrXevPRzopKnz9Eion0I8sA==" component={Prob31_2} />
              <Route exact path="/zz+dQ3GUmME3lVvcqzp521fcO/XqqQVvx7grm4ktP9uUrUzSwQgWR1kHu4kEKY5V0hFhWEcnH59JEwBMdQ/g8g==" component={Prob31_3} />
              <Route exact path="/bqxL2Ct5W1lKxF5XZ8asAIY5Gx4d8w6WCLFO7klTy490yYVT6QoC6U4JLucrrcuS686rkhx/KUxRVb/nPZGgug==" component={Prob32_1} />
              <Route exact path="/MZQYMVuTIXHPtIKr1nbOxdWUZKM8M30OWjId7/Ew2y3Op02Phf3GBGnowIY1pGavFEohXCMtxS0OlDYSxqVEAA==" component={Prob32_2} />
              <Route exact path="/mwcpCzTNHoFyb9fgKSzJiN4t1zhGWA/OsLKn9SyMnR0hbaRlnHCPaJOZXCpwhAnB96MHEQHP1b6tiMgqLmqwaw==" component={Prob32_3} />
              <Route exact path="/V8CnHqaHhJglXgZzsbvXgVCEqBF0gtb6wzJ98v9z3J81Xc7ZhrLiXVDadI0RbNvVyRyRlOSyhu+Z42GlWGakxw==" component={Prob33_1} />
              <Route exact path="/byFY65Js8s7Avd+76wq0hvmAYtGGoFp0Jd7xo2nQFGd6/1at/BpDeB1QHhYqfGvsOyHINwFxxxzr9RvYzNYgag==" component={Prob33_2} />
              <Route exact path="/S2nSG8XmjlqQqTnAKaZv2HWH4OAxOSsr4bI1N0jgHcIF3fuES0ZMJLhj6kk1PecfKFXGZ6Pt3R2Fj6D5EtTCQQ==" component={Prob33_3} />
              <Route exact path="/AMLIMkxCm+lbxEPLZ8b94Ba5DjErLq/HZzWHOSoI0oMNUw+yseSK+BGWzbaJfXVbzdXRcuaFzs1OST018bPoSg==" component={Prob34_1} />
              <Route exact path="/9G7i78x9Y53Nu//307RyBg5dTKl5HInwXfbWW239h0Aa/yo0upmdHx3aTamaL02bPip2lpxivD7nwSY4Ogv9bA==" component={Prob34_2} />
              <Route exact path="/YnWOSle3b+sfyHg4fE0mOeS/ve0Gr7XyIieDXZ/GO/vTDfNER64h7OaxZZwKvr1xbzUOgcNDmjeZFy3KmwX3jw==" component={Prob34_3} />
              <Route exact path="/4TT7E1v1l2IxgWipQP+fH4jEkzNfmM1rryC7QDM+hE/jAO1zPT6sGyU0MqXEgldFsJYWB1rmAZmp5gmYfAbQRQ==" component={Prob35_1} />
              <Route exact path="/74CFOkeY6LcqjgFJXdal7VZo4HSIt3KA0hqXuvNVwIjKjWrlk5fjepxjaQ+wDt67UnquFh4zOXYbXElSgKUoQg==" component={Prob35_2} />
              <Route exact path="/H1aPJjR3Wb+UUtgdUI9xDQDTO08QEfO5If2sdJb7a6VzB+5Z4+fdtPTU7B5pcNHXXDaGNo6pnbP6HDajJRfIBg==" component={Prob35_3} />
              <Route exact path="/Bt8FNxmBojfQ7RFHL658lMmsDv8dBUE1FnENF7EKT7b0UXvaSmlfAtCnPdTbVDtGU98o9dCdq4b5L/ubhtAeJQ==" component={Prob36_1} />
              <Route exact path="/iu6KuvSccUcWDhzlk07Jn6wcDayWIRibYVm6ORoXbphvWtmkPr2kqXPdAMLUxWKEWBiJnA7J+VSlq27/9znC9Q==" component={Prob36_3} />
              <Route exact path="/7sjrqEkyg6q88MlGzvRObRHsgYNXIHdO50NWwM97jwZofLsKEwECxAhPJEz/t0cTPlPGxuLSrkhBKdoKQ9SiRw==" component={Prob37_1} />
              <Route exact path="/Z0ivzmvkY3m+EvoBduHQED4CsiUKooUexbkkE/il+LnjElzHae/SHAIvUE69hSHaIuEM/6hPiLEbg7nzIuIUPA==" component={Prob37_3} />
              <Route exact path="/Ocp86ezGn2lr99ILsj3RUhtkH4Bsx6a3JKqmzb/7OgI/+YrnMiUVayxsnO3b/Bb1RT6PpJ/BDl2Wo4hVRqRu9A==" component={Prob38_1} />
              <Route exact path="/YbjxGKP6qZkeIhMPvvHdlLoI0JhriUI9BF4cYVTwFjzw0hHEGOWYbGtw5B0R3ao6LB10q0x6VRQR3inj8XuPyA==" component={Prob39_1} />     
              <Route exact path="/6qcGjm3+qMtd3BfPNsXLHkX/HvCFGb0c31pA8JkPS6E81cC9KKqitQJW/t1vOZnpVCRFBtDbJAq1REfcnbCYeg==" component={End1} />
              <Route exact path="/BfcDQQeKz2oG1CPSFyD5ZD1flTYm2IoCY23DqeeVgq6wyCCFf9P43FAqqDYNLI+pephf2ltim4CcrRj/ti04mQ==" component={End2} />
              <Route exact path="/lnNK99G0dl4dZYJUbzYEJwcuNklhwzUmZkyIvOidV4uBr97Y64Z6gcsLwKDgkZbo4sotdjZkvmQuDwcKEUMJNA==" component={End3} />
              <Route exact path="/End" component={End} />
              <Route exact path="/UufKY8hapbOrkagktFbwm8RcuJxw1RdLtB11MnqA4fU=" component={User2} />
              <Route exact path="/zxEnxC1NP6PPd/Pjn3Olr9ZBLL2ci33fn8H9vuMVjw4=" component={User3} />
              <Route exact path="/gxWZcU9fYanAI9oVt4PG3LKK/6fu5joecKr6JBlkP5E=" component={User4} />
              <Route path="/users/:id" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;