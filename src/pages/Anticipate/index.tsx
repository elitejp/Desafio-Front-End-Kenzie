import React, { useState } from "react";

import { StyledAnticipate } from "./styles";
import { FieldValues } from "react-hook-form";
import { IAnticipateValues, IResponse } from "./types";

import Form from "../../components/Form";
import anticipateSchema from "../../schemas/anticipate.schema";
import api from "../../service";
import { Redirect } from "react-router-dom";
import AnticipateResponse from "../../components/AnticipateResponse";

const Anticipate: React.FC = () => {
  const [anticipateValues, setAnticipateValues] = useState<IAnticipateValues>(
    {} as IAnticipateValues
  );
  const token = localStorage.getItem("token");

  const requestAnticipate = (data: FieldValues) => {
    if (data.days === "") {
      delete data.days;
    } else {
      const days = data.days.split(",");
      const daysAsNumber = days.map((day: string) => +day);

      data.days = daysAsNumber;
    }

    api.post("", data).then((res: IResponse) => {
      setAnticipateValues(res.data);
      console.log(res.data);
    });
  };

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <StyledAnticipate>
      <Form
        schema={anticipateSchema}
        titleText="Simule sua Antecipação"
        buttonText=""
        submitHandler={requestAnticipate}
      />
      <AnticipateResponse anticipateValues={anticipateValues} />
    </StyledAnticipate>
  );
};

export default Anticipate;
