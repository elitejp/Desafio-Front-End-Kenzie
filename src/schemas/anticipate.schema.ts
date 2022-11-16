import * as yup from "yup";

const antecipateSchema = yup.object().shape({
  amount: yup.number().required("Campo requerido!"),

  installments: yup.number().required("Campo requerido!"),

  mdr: yup.number().required("Campo requerido!"),

  days: yup.string(),
});

export default antecipateSchema;
