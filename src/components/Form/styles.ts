import styled from "styled-components";
import { IStyledFormButton } from "./types";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StyledFormTitle = styled.h2``;

export const StyledFormButton = styled.button<IStyledFormButton>`
  display: ${({ isDisplayed }) => (isDisplayed ? "flex" : "none")};
`;
