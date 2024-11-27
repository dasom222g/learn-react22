import React from "react";

const Button = ({ text, onButtonClick }) => {
  // logic
  const name = "후츠릿";

  const href = "https://www.naver.com";

  const handleClick = () => {
    onButtonClick(text);
  };

  // view
  return (
    <>
      <div className="button">
        <button type="button" onClick={handleClick}>
          {text}
        </button>
        <a href={href}>링크 이동</a>
        <p>안녕하세요 {name}님!</p>
      </div>
    </>
  );
};

export default Button;
