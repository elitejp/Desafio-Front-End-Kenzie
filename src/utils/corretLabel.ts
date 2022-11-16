export const corretLabel = (field: string) => {
  switch (field) {
    case "username":
      return "Login";
    case "password":
      return "Senha";

    case "amount":
      return "Informe o valor da venda *";
    case "installments":
      return "Em quantas parcelas *";
    case "mdr":
      return "Informe o percentual de MDR *";
    case "days":
      return "Periodo de recebimento - Separe por virgulas para mais periodos";

    default:
      return "";
  }
};
