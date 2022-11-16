import styled from "styled-components";
import { IStyledInput } from "./types";

export const StyledContainer = styled.div`
  text-align: left;
  margin: 10px;

  div {
    margin-bottom: 5px;
  }

  span {
    color: red;
  }
`;

export const StyledInput = styled.div<IStyledInput>`
  background-color: var(--primary200);
  border: 2px solid ${(props) => (props.isError ? "red" : "var(--primary0)")};
  padding: 5px;
  border-radius: 4px;
  width: 100%;
  display: flex;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
  }
`;
