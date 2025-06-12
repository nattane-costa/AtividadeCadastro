// Referências aos elementos
const form = document.getElementById("formCadastro");
const tabela = document.getElementById("tabelaDados");
const feedback = document.getElementById("feedback");

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtenha os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // ✅ TODO 1: Valide se os campos estão preenchidos
  // Se algum campo estiver vazio, mostrar mensagem no <p id="feedback">

  // ✅ TODO 2: Crie uma nova linha da tabela com os dados preenchidos
  // Use createElement para <tr>, <td>, botão de "Excluir"
  // Use appendChild para montar a linha

  // ✅ TODO 3: Adicione um evento no botão de "Excluir" para remover a linha da tabela

  // ✅ TODO 4 (opcional): Limpe o formulário após cadastro com .reset()
});
