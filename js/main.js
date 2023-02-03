const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = []
form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    let nome = evento.target.elements["nome"]
    let quantidade = evento.target.elements["quantidade"]

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome
    
    lista.appendChild(novoItem)
    
    let itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }
    
    itens.push(itemAtual)

    localStorage.setItem("item", JSON.stringify(itens))
}