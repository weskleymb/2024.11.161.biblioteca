import prompt from "prompt-sync";
import menuPrincipal from "../index.js";
import { dados } from "../../data/livros.js";

const input = prompt();

const livros = dados;

function cadastrarLivro() {
    console.log("+------------------------------------+");
    console.log("| Cadastro de Livro                  |");
    console.log("+------------------------------------+");
    const id = Math.floor(Math.random() * 1000000).toString();
    const titulo = input("| * Título: ");
    const autor = input("| * Autor: ");
    const editora = input("| * Editora: ");
    const emprestado = false;
    livros.push({ id, titulo, autor, editora, emprestado });
    console.log("+------------------------------------+");
    console.log("| Livro cadastrado com sucesso!      |");
    console.log("+------------------------------------+");
}

function editarLivro() {
    console.log("+-----------------------------------+");
    console.log("| Editar livro                      |");
    console.log("+-----------------------------------+");
    const id = input("| * ID do livro: ");
    const index = livros.findIndex(livro => livro.id === id);
    if (index >= 0) {
        const titulo = input("| * Título: ");
        const autor = input("| * Autor: ");
        const editora = input("| * Editora: ");
        livros[index] = { ...livros[index], titulo, autor, editora };
        console.log("+-----------------------------------+");
        console.log("| Livro editado com sucesso!        |");
        console.log("+-----------------------------------+");
    } else {
        console.log("+-----------------------------------+");
        console.log("| Livro não encontrado!             |");
        console.log("+-----------------------------------+");
    }
}

function excluirLivro() {
    console.log("+-----------------------------------+");
    console.log("| Excluir livro                     |");
    console.log("+-----------------------------------+");
    const id = input("| * ID do livro: ");
    const index = livros.findIndex(livro => livro.id === id);
    if (index >= 0) {
        livros.splice(index, 1);
        console.log("+-----------------------------------+");
        console.log("| Livro excluído com sucesso!       |");
        console.log("+-----------------------------------+");
    } else {
        console.log("+-----------------------------------+");
        console.log("| Livro não encontrado!             |");
        console.log("+-----------------------------------+");
    }
}

function listarTodosLivros() {
    console.log("+-----------------------------------+");
    console.log("| Todos os livros                   |");
    console.log("+-----------------------------------+");
    livros.forEach(livro => console.log(`| Id: ${livro.id} - Título: ${livro.titulo} - Emprestado: ${livro.emprestado}`));
    console.log("+-----------------------------------+");
}

function buscarLivroPorId() {
    console.log("+-----------------------------------+");
    console.log("| Buscar livro por ID               |");
    console.log("+-----------------------------------+");
    const id = input("| * ID do livro: ");
    const livro = livros.find(livro => livro.id === id);
    if (livro) {
        console.log("+-----------------------------------+");
        console.log(`| Id: ${livro.id}`);
        console.log(`| Título: ${livro.titulo}`);
        console.log(`| Autor: ${livro.autor}`);
        console.log(`| Editora: ${livro.editora}`);
        console.log(`| Emprestado: ${livro.emprestado}`);
        console.log("+-----------------------------------+");
    } else {
        console.log("+-----------------------------------+");
        console.log("| Livro não encontrado!             |");
        console.log("+-----------------------------------+");
    }
}

function menuLivros() {
    const opcoes = [
        "+-----------------------------------+",
        "| Menu Livros                       |",
        "+-----------------------------------+",
        "| 1 - Cadastrar Livro               |",
        "| 2 - Editar Livro                  |",
        "| 3 - Excluir Livro                 |",
        "| 4 - Listar todos os livros        |",
        "| 5 - Buscar livro por ID           |",
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
            cadastrarLivro();
            menuLivros();
            break;
        case "2":
            editarLivro();
            menuLivros();
            break;
        case "3":
            excluirLivro();
            menuLivros();
            break;
        case "4":
            listarTodosLivros();
            menuLivros();
            break;
        case "5":
            buscarLivroPorId();
            menuLivros();
            break;
        default:
            menuLivros();
    }
}

export default menuLivros;
