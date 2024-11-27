import React from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import Counter from "../components/Counter";
import Welcome from "../components/Welcome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Hello world
      <Link className="block bg-sky-400" to={"/login"}>
        로그인 하러가기
      </Link>
      <Button />
      <Message />
      <Counter />
      <Welcome name="신태호" message="오늘도 좋은하루 보내세요!" />
      <Welcome name="김은희" message="오늘도 좋은하루 보내세요!" />
      <Welcome name="김범준" message="오늘도 좋은하루 보내세요!" />
      <Welcome name="유두훈" message="오늘도 좋은하루 보내세요!" />
    </div>
  );
};

export default Home;
