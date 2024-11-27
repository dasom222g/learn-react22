import React from "react";
import Button from "./Button";

const Welcome = ({ name, message }) => {
  // logic
  const handleClick = (data) => {
    console.log("click!!", data);
  };

  // view
  return (
    <div className="border border-blue-700">
      <h3 className="text-lime-500">안녕하세요, {name}님!</h3>
      <p>{message}</p>
      <Button text="첫번째 버튼" onButtonClick={handleClick} />
      <Button text="두번째 버튼" onButtonClick={handleClick} />
    </div>
  );
};

export default Welcome;
