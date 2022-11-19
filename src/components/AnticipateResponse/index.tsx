import React from "react";

import {
  StyledAnticipateResponse,
  StyledAnticipateTitle,
  StyledAnticipateValue,
} from "./styles";
import { Props } from "./types";

const AnticipateResponse: React.FC<Props> = ({ anticipateValues }) => {
  const arrayAnticipateValues = Object.keys(anticipateValues);
  return (
    <StyledAnticipateResponse>
      <StyledAnticipateTitle>VOCÊ RECEBERÁ: </StyledAnticipateTitle>
      <hr></hr>
      {arrayAnticipateValues.map((value: string, index: number) => {
        return (
          <StyledAnticipateValue key={index}>
            <p>
              {+value === 0
                ? "Hoje:"
                : +value === 1
                ? "Amanhã:"
                : `Em ${value} dias:`}
            </p>
            <h4>R$ {anticipateValues[value]},00</h4>
          </StyledAnticipateValue>
        );
      })}
    </StyledAnticipateResponse>
  );
};

export default AnticipateResponse;
