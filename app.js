let nomes = [];
function adicionarAmigo() {
    if (document.querySelector('input').value.trim() == '') {
        alert('Por favor, insira um nome.');
        limparTela();
    } else {
        let amigo = document.querySelector('input').value;
        nomes.push(amigo);
        limparTela();
    }
}
function limparTela() {
    document.querySelector('input').value = '';
}