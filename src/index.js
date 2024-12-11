import prompt from "prompt-sync";

import menuUsuarios from "./usuarios/usuarios.js";
import menuLivros from "./livros/livros.js";
import menuEmprestimos from "./emprestimos/emprestimos.js";

function menuPrincipal() {
    const input = prompt();
    const opcoes = [
        "+-----------------------------------+",
        "| Sistema de Biblioteca             |",
        "+-----------------------------------+",
        "| 1 - Menu Livros                   |",
        "| 2 - Menu Usuarios                 |",
        "| 3 - Menu Emprestimos              |",
        "| 0 - Sair                          |",
        "+-----------------------------------+",
    ]
    const menu = opcoes.join("\n");
    console.log(menu);
    let opcao = input("* Escolha a opção desejada: ");
    console.clear();
    switch (opcao) {
        case "0":
            break;
        case "1":
            menuLivros();
            break;
        case "2":
            menuUsuarios();
            break;
        case "3":
            menuEmprestimos();
            break;
        default:
            menuPrincipal();
    }
}

export default menuPrincipal;

console.clear();
menuPrincipal();