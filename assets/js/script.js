let array = []
let tabela = document.getElementById("table")
let numberRegistros = 0

function cadastrar() {
    let nome = document.getElementById('nome-input').value
    let idade = document.getElementById('idade-input').value
    let sexo = document.getElementById('sexo-input').value

    if (nome == 0 || idade == 0 || sexo == 0) {
        alert("digite um valor nos espaços!!")
    }
    else if (idade < 0) {
        alert("digite uma idade maior que 0")
    }

    else {


        let obj = {
            nome: nome,
            idade: idade,
            sexo: sexo,
        }

        array.push(obj)

        criarTabela()


        document.getElementById("number-registros").innerHTML = numberRegistros += 1

    }
}
function criarTabela() {

    tabela.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
        tabela.innerHTML += `
<tr>
<td>${array[i].nome}</td>
<td>${array[i].idade}</td>
<td>${array[i].sexo}</td>
</tr>
`
    }

}



function filtro() {
    let sexoFiltro = document.getElementById('sexo-filter').value




    if (sexoFiltro == "Selecione um item") {
        alert("Selecione uma opção")
    }

    tabela.innerHTML = ''
    for (let i = 0; i < array.length; i++) {

        if (array[i].sexo == sexoFiltro) {

            tabela.innerHTML += `
            <tr>
            <td>${array[i].nome}</td>
            <td>${array[i].idade}</td>
            <td>${array[i].sexo}</td>
            </tr>
            `
        }
        else if (sexoFiltro == "Todos") {
            tabela.innerHTML += `
            <tr>
            <td>${array[i].nome}</td>
            <td>${array[i].idade}</td>
            <td>${array[i].sexo}</td>
            </tr>
            `
        }

    }

}

