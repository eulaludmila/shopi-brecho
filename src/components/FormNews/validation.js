import * as yup from "yup";

const shema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Mínimo dois caracteres")
    .required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
});

export default shema;
