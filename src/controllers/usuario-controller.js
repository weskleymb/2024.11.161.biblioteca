import usuarioRepository from "../repositories/usuario-repository.js";

/**
 * Controlador de Usuários.
 * 
 * Responsável por intermediar as chamadas entre a camada de serviço e o repositório de usuários.
 * Fornece métodos para salvar, remover, listar e buscar usuários pelo CPF.
 */
const usuarioController = {

    /**
     * Salva ou atualiza um usuário.
     * 
     * @param {Object} usuario - Objeto representando o usuário.
     * @param {string} usuario.cpf - CPF do usuário (obrigatório).
     * @param {string} [usuario.nome] - Nome do usuário.
     * @param {string} [usuario.fone] - Telefone do usuário.
     * @param {string} [usuario.email] - E-mail do usuário.
     * @returns {void}
     */
    save: (usuario) => usuarioRepository.save(usuario),

    /**
     * Remove um usuário pelo CPF.
     * 
     * @param {string} cpf - CPF do usuário a ser removido.
     * @returns {void}
     */
    remove: (cpf) => usuarioRepository.remove(cpf),

    /**
     * Retorna uma lista com todos os usuários.
     * 
     * @returns {Array<Object>} - Lista de usuários cadastrados.
     */
    findAll: () => usuarioRepository.findAll(),

    /**
     * Busca um usuário pelo CPF.
     * 
     * @param {string} cpf - CPF do usuário a ser buscado.
     * @returns {Object|null} - Objeto do usuário encontrado ou null se não existir.
     */
    findByCpf: (cpf) => usuarioRepository.findByCpf(cpf)

}

export default usuarioController;
