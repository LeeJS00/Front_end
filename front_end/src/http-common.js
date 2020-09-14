import axios from "axios";

export default axios.create({
  baseURL: "http://laybirinth.postech.ac.kr/",
  headers: {
    "Content-type": "application/json"
  }
});