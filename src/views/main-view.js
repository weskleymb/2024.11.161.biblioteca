import PromptSync from "prompt-sync";

import utils from "../utils/format-util.js";

import usuarioView from "./usuario-view.js";
import livroView from "./livro-view.js";

const prompt = PromptSync();

const menuPrincipal = () => {
    console.clear();
    const width = 80;
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("Sistema de Biblioteca", width));
    console.log(utils.createBase(width));
    console.log(utils.formatMessage("1 - Menu Usuários", width));
    console.log(utils.formatMessage("2 - Menu Livros", width));
    console.log(utils.formatMessage("0 - Sair", width));
    console.log(utils.createBase(width));
    const opcao = prompt("| * Escolha a opção desejada: ");
    switch (opcao) {
        case "0":
            process.exit();
        case "1":
            usuarioView();
            break;
        case "2":
            livroView();
            break;
        default:
            menuPrincipal();
    }
}

export default menuPrincipal;