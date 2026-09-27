// =====================================================
// 1. FUNÇÃO DE MULTIPLICAÇÃO + TESTES AUTOMATIZADOS
// =====================================================
function multiplicar(a, b) {
  return a * b;
}

function testarMultiplicacao() {
  console.assert(multiplicar(2, 3) === 6,  "Teste 1 falhou: 2 x 3 deveria ser 6");
  console.assert(multiplicar(5, 0) === 0,  "Teste 2 falhou: 5 x 0 deveria ser 0");
  console.assert(multiplicar(-2, 4) === -8, "Teste 3 falhou: -2 x 4 deveria ser -8");
  console.assert(multiplicar(10, 10) === 100, "Teste 4 falhou: 10 x 10 deveria ser 100");

  console.log("✅ Todos os testes de multiplicação passaram!");
}

testarMultiplicacao();

// =====================================================
// 2. VALIDAÇÃO DO FORMULÁRIO (com mensagens específicas)
// =====================================================
function validar(event) {
  event.preventDefault();

  const nome  = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const msg   = document.getElementById("mensagem");

  // Reset de estilo
  msg.className = "";
  msg.textContent = "";

  // ---- Validação do NOME ----
  if (nome === "") {
    msg.className = "erro";
    msg.textContent = "⚠️ O campo Nome é obrigatório!";
    return false;
  }

  // ---- Validação do E-MAIL ----
  if (email === "") {
    msg.className = "erro";
    msg.textContent = "⚠️ O campo E-mail é obrigatório!";
    return false;
  }

  // Regex simples para formato de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    msg.className = "erro";
    msg.textContent = "⚠️ Formato de e-mail inválido! Ex: nome@dominio.com";
    return false;
  }

  // ---- Validação da IDADE ----
  if (idade === "") {
    msg.className = "erro";
    msg.textContent = "⚠️ O campo Idade é obrigatório!";
    return false;
  }

  if (isNaN(idade)) {
    msg.className = "erro";
    msg.textContent = "⚠️ A idade deve conter apenas números!";
    return false;
  }

  const idadeNum = Number(idade);
  if (idadeNum < 1 || idadeNum > 120) {
    msg.className = "erro";
    msg.textContent = "⚠️ A idade deve estar entre 1 e 120!";
    return false;
  }

  // ---- Sucesso ----
  msg.className = "sucesso";
  msg.textContent = "✅ Formulário enviado com sucesso!";
  return true;
}