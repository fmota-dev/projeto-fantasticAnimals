export default function initFuncionamento() {
  const elementoFuncionamento = document.querySelector("#funcionamento");
  const diasDeFuncionamento = elementoFuncionamento.dataset.semana
    .split(",")
    .map(Number);
  const horariosDeFuncionamento = elementoFuncionamento.dataset.horario
    .split(",")
    .map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();

  const [horarioDeAbertura, horarioDeFechamento] = horariosDeFuncionamento;

  const estaAbertoHoje = diasDeFuncionamento.includes(diaAtual);
  const estaDentroDoHorario =
    horaAtual >= horarioDeAbertura && horaAtual < horarioDeFechamento;

  if (estaAbertoHoje && estaDentroDoHorario) {
    elementoFuncionamento.classList.add("aberto");
  }
}
