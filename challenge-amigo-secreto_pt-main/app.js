let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == '') {
        alert('O campo não pode estar vazio, por favor insira um nome');
    } else {
        if (amigos.includes(nomeAmigo)) {
            alert('Este amigo ja foi adcionado. Tente outro.');
        } else {
            amigos.push(nomeAmigo);
            limparCampo();
            atualizarListaAmigos();
        }
    }
}

function limparCampo() {
    let nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaAmigos.appendChild(lista);
    }
}


function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Não há amigos para sortear!');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
    }
}





