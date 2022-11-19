import React from "react";
import Form from "../../components/Form";
import { StyledLogin } from "./styles";
import loginSchema from "../../schemas/login.schema";

import { useHistory } from "react-router-dom";
import { useLogin } from "../../providers/Login/LoginContext";
import { FieldValues } from "react-hook-form";

const Login: React.FC = () => {
  let history = useHistory();
  const { saveToken } = useLogin();

  const logIn = (data: FieldValues) => {
    saveToken(data.username);
    localStorage.setItem("token", data.username);
    history.push("/anticipate");
  };

  return (
    <StyledLogin>
      <Form
        schema={loginSchema}
        titleText=""
        buttonText="Logar"
        submitHandler={logIn}
      />
    </StyledLogin>
  );
};

export default Login;
