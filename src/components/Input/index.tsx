import React from "react";
import { StyledContainer, StyledInput } from "./styles";
import { Props } from "./types";

const Input: React.FC<Props> = ({ label, register, name, error, ...rest }) => {
  return (
    <StyledContainer>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <StyledInput isError={!!error}>
        <input {...register(name)} {...rest} />
      </StyledInput>
    </StyledContainer>
  );
};

export default Input;
