import { AnyObjectSchema } from "yup";
import { SubmitHandler, FieldValues } from "react-hook-form";

export default interface Props {
  schema: AnyObjectSchema;
  buttonText: string;
  submitHandler: SubmitHandler<FieldValues>;
}
