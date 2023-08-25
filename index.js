
let estoque = [];
function adicionarItem() {
  let novoItem = prompt("Digite o produto:");
  estoque.push(novoItem);
  alert("Item adicionado: " + novoItem);
}
function removerItem() {
  if (estoque.length === 0) {
    alert("O estoque está vazio.");
    return;
  }
  
  let itemRemover = prompt("Digite o índice do item a ser removido (0 até " + (estoque.length - 1) + "):");
  itemRemover = parseInt(itemRemover);
  
  if (isNaN(itemRemover) || itemRemover < 0 || itemRemover >= estoque.length) {
    alert("Índice inválido.");
    return;
  }
  
  let itemRemovido = estoque.splice(itemRemover, 1);
  alert("Item removido do estoque: " + itemRemovido[0]);
}
function exibirEstoque() {
  if (estoque.length === 0) {
    alert("O estoque está vazio.");
    return;
  }
  
  let listaItens = "Itens no estoque:\n";
  estoque.forEach(function(item, index) {
    listaItens += index + ": " + item + "\n";
  });
  
  alert(listaItens);
}

while (true) {
  let opcao = prompt("Escolha uma opção:\n1. Adicionar item\n2. Remover item\n3. Exibir estoque\n4. Sair");
  
  switch (opcao) {
    case "1":
      adicionarItem();
      break;
    case "2":
      removerItem();
      break;
    case "3":
      exibirEstoque();
      break;
    case "4":
      alert("Saindo do programa.");
      exit(0);
    default:
      alert("Opção inválida.");
  }
}
