import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Campo requerido!")
    .min(3, "Minimo de 3 caracteres"),

  password: yup
    .string()
    .required("Campo requerido!")
    .min(4, "Minimo de 4 caracteres"),
});

export default loginSchema;
