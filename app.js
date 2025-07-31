let amigos = [];
function adicionarAmigo() {
    if (document.querySelector('input').value.trim() == '') {
        alert('Por favor, insira um nome válido.');
        limparTela();
    } else {
        let amigo = document.querySelector('input').value;
        amigos.push(amigo);
        atualizarListaAmigos(amigos);
        limparTela();
    }
}
function limparTela() {
    document.querySelector('input').value = '';
}

function atualizarListaAmigos(amigo) {
    let listaAmigosHTML = document.querySelector('#listaAmigos');
    listaAmigosHTML.innerHTML = '';

    if (Array.isArray(amigo)) {
        for (let i = 0; i < amigos.length; i++) {
            let novoAmigo = document.createElement('li');
            novoAmigo.textContent = amigos[i];
            listaAmigosHTML.appendChild(novoAmigo);
        }
    }
    else {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = `O amigo secreto sorteado é: ${amigo}`;
        listaAmigosHTML.appendChild(novoAmigo);
    }

}

function sortearAmigo() {
    if (amigos.length == 0) {
        console.log('Está vazio');
    } else {
        let index = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[index];
        atualizarListaAmigos(amigoSorteado);
    }
}
