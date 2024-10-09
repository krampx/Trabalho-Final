let abrigos = []

function cadastrarAbrigo() {
    const nome = prompt("Digite o nome do abrigo:");
    const endereco = prompt("Digite o endereço do abrigo:");
    const telefone = prompt("Digite o telefone do abrigo:");
    const capacidade = parseInt(prompt("Digite a capacidade de lotação do abrigo:"), 10);

    const abrigo = {
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        capacidade: capacidade
    };

    abrigos.push(abrigo);
    alert("Abrigo cadastrado com sucesso!");
}

function listarAbrigos() {
    if (abrigos.length === 0) {
        alert("Nenhum abrigo cadastrado.");
        return;
    }

    let lista = "===== ABRIGOS CADASTRADOS =====\n";
    abrigos.forEach((abrigo, index) => {
        lista += `${index}. Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}\n`;
    });
    alert(lista);
}

function procurarAbrigo() {
    const cidade = prompt("Digite a cidade onde você está procurando abrigo:");
    const resultados = abrigos.filter(abrigo => abrigo.endereco.toLowerCase().includes(cidade.toLowerCase()));

    if (resultados.length === 0) {
        alert("Nenhum abrigo encontrado nessa cidade.");
    } else {
        let lista = `===== ABRIGOS ENCONTRADOS EM ${cidade.toUpperCase()} =====\n`;
        resultados.forEach(abrigo => {
            lista += `Nome: ${abrigo.nome}, Endereço: ${abrigo.endereco}, Telefone: ${abrigo.telefone}, Capacidade: ${abrigo.capacidade}\n`;
        });
        alert(lista);
    }
}

function menu() {
    let opcao;

    do {
        opcao = prompt(`===== ABRIGOS TEMPORÁRIOS =====\n1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sair\nEscolha uma opção:`);

        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigo();
                break;
            case '4':
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '4');
}

// Inicia o programa
menu();
