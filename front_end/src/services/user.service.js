import http from "../http-common";
//import { Body } from '@nestjs/common';

class UserDataService {
  getImage(id) {
    return http.get(`/api/img/${id}.png`,{responseType:'arraybuffer'});
  }
  getAns(_id, _input) {
    return http.post('/api/ans',{pid:_id, input: _input});
  }
  getUser() {
    return http.get('/api/end_user/num');
  }
  endUser(_name,_id,_phone, _level) {
    return http.post('/api/end_user',{name : _name, id: _id, phone :_phone,level:_level});
  }

}

export default new UserDataService();