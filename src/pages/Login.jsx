import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // logic
  const history = useNavigate();

  // view
  return (
    <div>
      Login
      <button
        type="button"
        className="block bg-sky-400"
        onClick={() => history("/")}
      >
        Home으로 이동
      </button>
    </div>
  );
};

export default Login;
