import styled from "styled-components";

export const StyledAnticipateResponse = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 500px;
  justify-content: center;
  background-color: var(--primary0);
  border-radius: 0 10px 10px 0;

  hr {
    margin: 5px 0;
    height: 1px;
    background-color: var(--primary_text200);
    border: none;
  }
`;

export const StyledAnticipateValue = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 5px;

  p,
  h4 {
    color: var(--secundary_text100);
    font-style: italic;
  }
`;

export const StyledAnticipateTitle = styled.h2`
  color: var(--secundary_text0);
`;
