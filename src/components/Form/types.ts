import { AnyObjectSchema } from "yup";
import { SubmitHandler, FieldValues } from "react-hook-form";

export default interface Props {
  schema: AnyObjectSchema;
  titleText: string;
  buttonText: string;
  submitHandler: SubmitHandler<FieldValues>;
}

export interface IStyledFormButton {
  isDisplayed: boolean;
}
