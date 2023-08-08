const button = document.querySelector('.button-add-task')
const listaCompleta = document.querySelector('.list-tasks')
const input = document.querySelector('.input-task')
let minhaListaDeItens = []


function adicionarNovaTarefa() {

    const input = document.querySelector('.input-task')
    const inputValue = input.value.trim()

    if (inputValue === '') {
        alert('Por favor, preencha o campo de tarefa antes.')
    } else {
        minhaListaDeItens.push({
            tarefa: input.value,
            concluida: false
        })
        input.value = ''
        mostarTarefas()
    }
    
}



function mostarTarefas() {

    let novaLi = ''


    minhaListaDeItens.forEach((item, index) =>  {
        novaLi = novaLi +  `

        <li class="task ${item.concluida && "done"} ">
            <img src="/img/checked.png" alt="checked-na-tarefa" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img src="/img/trash.png" alt="tarefa-para-o-lixo"onclick=" deletarItem(${index})">
        </li>
       
        `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.getItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(index) {

    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostarTarefas()
}

function deletarItem(index) {

    minhaListaDeItens.splice(index, 1)

    mostarTarefas()
}

function recarregarTarefas() {

    let tarefaDoLocalStorage = localStorage.getItem('lista')

    if (tarefaDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefaDoLocalStorage)
    }

    mostarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)