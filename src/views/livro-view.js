// Importações necessárias
import PromptSync from "prompt-sync";
import utils from "../utils/format-util.js";
import menuPrincipal from "./main-view.js";

// Inicializando o prompt
const prompt = PromptSync();
const width = 80;

const livroView = () => {
    console.clear();
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Menu Livros", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Cadastrar livro", width));
    console.log(utils.formatMessage("2 - Editar livro", width));
    console.log(utils.formatMessage("3 - Excluir livro", width));
    console.log(utils.formatMessage("4 - Listar todos os livros", width));
    console.log(utils.formatMessage("5 - Buscar livro por id", width));
    console.log(utils.formatMessage("0 - Retornar ao menu principal", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Digite a opção desejada: ");
    switch (opcao) {
        case "0":
            menuPrincipal();
            break;
        case "1":
            // cadastrarUsuario();
            break;
        case "2":
            // editarUsuario();
            break;
        case "3":
            // excluirUsuario();
            break;
        case "4":
            // listarUsuarios();
            break;
        case "5":
            // buscarUsuario();
            break;
        default:
            livroView();
    }
};

// Exporta a visualização de livros
export default livroView;
