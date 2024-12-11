import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { dados } from "../../data/usuarios.js";

const input = prompt();

const usuarios = dados;

function cadastrarUsuario() {
    console.log("+------------------------------------+");
    console.log("| Cadastro de Usuário                |");
    console.log("+------------------------------------+");
    const cpf = input("| * CPF: ");
    const nome = input("| * Nome: ");
    const email = input("| * E-mail: ");
    const telefone = input("| * Telefone: ");
    usuarios.push({ cpf, nome, email, telefone });
    console.log("+------------------------------------+");
    console.log("| Usuário cadastrado com sucesso!    |");
    console.log("+------------------------------------+");
}

function listarTodosUsuarios() {
    console.log("+-----------------------------------+");
    console.log("| Todos os usuários                 |");
    console.log("+-----------------------------------+");
    usuarios.forEach(usuarios => console.log(`| Id: ${usuarios.cpf} - Título: ${usuarios.nome}`));
    console.log("+-----------------------------------+");
}

function menuUsuarios() {
    const opcoes = [
        "+-----------------------------------+",
        "| Menu Usuários                     |",
        "+-----------------------------------+",
        "| 1 - Cadastrar Usuário             |",
        "| 2 - Editar Usuário                |",
        "| 3 - Excluir Usuário               |",
        "| 4 - Listar todos os usuários      |",
        "| 5 - Buscar usuário por CPF        |",
        "| 0 - Retornar ao menu principal    |",
        "+-----------------------------------+",
    ]
    const menu = opcoes.join("\n");
    console.log(menu);
    let opcao = input("* Digite a opção desejada: ");
    console.clear();
    switch (opcao) {     
        case "0":
            menuPrincipal();
            break;
        case "1":
            cadastrarUsuario();
            menuUsuarios();
            break;
        case "2":

            break;
        case "3":

            break;
        case "4":
            listarTodosUsuarios();
            menuUsuarios();
            break;
        case "5":

            break;
        default:
            menuUsuarios();
    }
}

export default menuUsuarios;