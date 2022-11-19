import * as yup from "yup";

const anticipateSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Campo requerido!")
    .typeError("Deve preencher com um numero"),

  installments: yup
    .number()
    .required("Campo requerido!")
    .typeError("Deve preencher com um numero"),

  mdr: yup
    .number()
    .required("Campo requerido!")
    .typeError("Deve preencher com um numero"),

  days: yup.string().matches(/^\S*$/, "Sem espaços"),
});

export default anticipateSchema;
