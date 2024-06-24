function produtos(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const descricao = document.getElementById("descricao").value;
  const tBody = document.getElementById("listaDeProdutos");
  const radios = document.querySelector('input[name="opcao"]:checked');

  if (
    nome.value === "" ||
    isNaN(valor) ||
    descricao.value === "" ||
    radios === null
  ) {
    console.log();
    alert("Por favor, preencha todos os campos");
    return;
  }

  const novaLinha = document.createElement("tr");
  const tdNome = document.createElement("td");
  const tdValor = document.createElement("td");

  tdNome.textContent = nome;
  tdValor.textContent = valor.toFixed(2);

  novaLinha.appendChild(tdNome);
  novaLinha.appendChild(tdValor);
  tBody.appendChild(novaLinha);

  document.getElementById("nome").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("descricao").value = "";

  ordenarPorValor();
}
function ordenarPorValor() {
  const listaDeProdutos = document.getElementById("listaDeProdutos");
  const linhas = Array.from(listaDeProdutos.rows);

  linhas.sort((a, b) => {
    const valorA = parseFloat(a.cells[1].textContent);
    const valorB = parseFloat(b.cells[1].textContent);
    return valorA - valorB;
  });

  while (listaDeProdutos.firstChild) {
    listaDeProdutos.removeChild(listaDeProdutos.firstChild);
  }
  linhas.forEach((linha) => listaDeProdutos.appendChild(linha));
}
