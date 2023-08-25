

// Seleciona o botão de Login e a janela modal
const loginBtn = document.getElementById("login-link");
const modal = document.getElementById("login-modal");

// Nessas linhas, o código está selecionando o botão de login
//  e a janela modal por meio dos seus IDs (identificadores únicos) no HTML. 
// O método getElementById é usado para isso, que busca e retorna um elemento com o ID especificado.


// Quando o botão de Login é clicado, exibe a janela modal
loginBtn.onclick = function() {
	modal.style.display = "block";
}

// Nessa linha, um evento de clique é adicionado ao botão de login através da propriedade onclick.
//  Quando o usuário clicar no botão, a função definida no código será executada,
//  que muda a propriedade display da janela modal para "block", fazendo-a aparecer.


// Quando o usuário clica no botão "X" da janela modal, fecha a janela
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}

// Nessas linhas, o código está selecionando o botão "X" dentro da janela modal,
//  que é clicado pelo usuário para fechá-la. Quando esse botão é clicado, 
//  a função definida no código será executada, que muda a propriedade display
//   da janela modal para "none",
//  fazendo-a desaparecer.


// Quando o usuário clica fora da janela modal, fecha a janela

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }


    // Nessas linhas, o código está adicionando um evento de clique na janela do navegador. 
    // Quando o usuário clica fora da janela modal, a função definida no código será executada,
    //  que verifica se o clique ocorreu fora da janela modal.
    //  Se sim, a propriedade display da janela modal é alterada para "none", fazendo-a desaparecer.