import axios from "axios";

export default axios.create({
  baseURL: "http://labyrinth.postech.ac.kr/",
  //baseURL:"http://localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
});