let lista = []
let opcao = ''
do {
    let convidados = ''
    for (let i = 0; i < lista.length; i++) {
    convidados += (i + 1) + '-' + lista[i] +'\n'
    }

    opcao = prompt(
    '\n1-Adicionar convidado' +
    '\n2-Lista de convidados'+
    '\n3-Sair')

    switch(opcao){
        case '1':
            const novoConvidado = prompt('Nome do convidado:')
            lista.push(novoConvidado)
            break
        case '2':
            alert('Convidados:\n' + convidados)
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while ( opcao !== '3')
