import * as yup from "yup";

const shema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Mínimo dois caracteres")
    .required("Nome é Obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é Obrigatório"),
});

export default shema;
