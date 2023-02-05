const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    let nome = evento.target.elements["nome"]
    let quantidade = evento.target.elements["quantidade"]

    let itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe) {
        itemAtual.id = existe.id
    
        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemetno.id === existe.id)] = itemAtual
    }else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0

        criaElemento(itemAtual)

        itens.push(itemAtual)
}
    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
   
    novoItem.appendChild(botaoDeleta(item.id))
    
    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    let elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove

    itens.splice(itens.findIdex(elemento => elemento.id === id))

    localStorage.setItem("itens", JSON.stringify(itens))
}