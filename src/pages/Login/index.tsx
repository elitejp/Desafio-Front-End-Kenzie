import React from "react";
import Form from "../../components/Form";
import { StyledLogin } from "./styles";
import loginSchema from "../../schemas/login.schema";

import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  let history = useHistory();

  const logIn = () => {
    history.push("/anticipate");
  };

  return (
    <StyledLogin>
      <Form schema={loginSchema} buttonText="Logar" submitHandler={logIn} />
    </StyledLogin>
  );
};

export default Login;
