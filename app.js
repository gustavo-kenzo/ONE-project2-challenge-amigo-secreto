let amigos = [];
function adicionarAmigo() {
    if (document.querySelector('input').value.trim() == '') {
        alert('Por favor, insira um nome válido.');
        limparTela();
    } else {
        let amigo = document.querySelector('input').value;
        amigos.push(amigo);
        atualizarListaAmigos();
        limparTela();
    }
}
function limparTela() {
    document.querySelector('input').value = '';
}

function atualizarListaAmigos() {
    let listaAmigosHTML = document.querySelector('#listaAmigos');
    listaAmigosHTML.innerHTML = "";

    for (let amigo of amigos) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigosHTML.appendChild(novoAmigo);
    }
}