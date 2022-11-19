import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { StyledForm, StyledFormButton, StyledFormTitle } from "./styles";
import Props from "./types";
import Input from "../Input";
import { corretLabel } from "../../utils/corretLabel";

const Form: React.FC<Props> = ({
  schema,
  titleText,
  buttonText,
  submitHandler,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const schemaFields = Object.keys(schema.fields);

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      {titleText !== "" && <StyledFormTitle>{titleText}</StyledFormTitle>}
      {schemaFields.map((field, index) => {
        return (
          <Input
            label={corretLabel(field)}
            register={register}
            name={field}
            error={errors[field]?.message as string}
            type={field === "password" ? "password" : "text"}
            key={index}
          />
        );
      })}
      <StyledFormButton isDisplayed={buttonText !== ""} type="submit">
        {buttonText}
      </StyledFormButton>
    </StyledForm>
  );
};

export default Form;
