// Exercicio 4
// const naipes = ['Espadas', 'Copas', 'Ouros', 'Paus'];
// const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];
// const baralho = [];
// for (const valor of valores) {
//     for (const naipe of naipes) {
//         baralho.push({ valor, naipe });
//     }
// }
// function embaralhar(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// function distribuirCartas(baralho, numCartas) {
//     return baralho.splice(0, numCartas);
// }
// const numJogadores = 4;
// embaralhar(baralho);
// const maos = [];
// for (let i = 0; i < numJogadores; i++) {
//     maos.push(distribuirCartas(baralho, 5));
// }
// let mensagem = '';
// for (let i = 0; i < maos.length; i++) {
//     mensagem += `Mão do Jogador ${i + 1}:\n`;
//     for (const carta of maos[i]) {
//         mensagem += `${carta.valor} de ${carta.naipe}\n`;
//     }
//     mensagem += '\n';
// }
// alert(mensagem);


