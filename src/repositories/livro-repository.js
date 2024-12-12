import database from './database.js';

/**
 * Repositório de livros para manipular os dados armazenados no banco de dados.
 */
const livroRepository = {
    
    /**
     * Retorna todos os livros no banco de dados.
     * @returns {Array} Lista de livros.
     */
    findAll: () => database.livros,

    /**
     * Busca um livro pelo Id
     * @param {string} id - O Id do livro a ser buscado.
     * @returns {Object|undefined} O livro encontrado ou undefined se não encontrado.
     * */
    findById: (id) => database.livros.find(livro => livro.id === id),

    /**
     * Salva um novo livro no banco de dados.
     * @param {Object} livro - O livro a ser salvo.
     * @param {string} livro.id - O id do livro.
     * @param {string} livro.titulo - O título do livro.
     * @param {string} livro.autor - O autor do livro.
     * @param {string} livro.editora - A editora do livro.
     * @param {boolean} livro.emprestado - Se o livro está emprestado ou não.
     */
    save: (livro) => {
        const isBookExists = livroRepository.findById(livro.id)
        if (isBookExists) {
            Object.assign(isBookExists, livro);
        } else {
            livro.id = Date.now().toString();
            database.livros.push(livro);
        }
    },

    /**
     * Remove um livro do banco de dados pelo ISBN.
     * @param {string} id - O id do livro a ser removido.
     */
    remove: (id) => {
        const index = database.livros.findIndex(livro => livro.id === id);
        if (index !== -1) {
            database.livros.splice(index, 1);
        } else {
            throw new Error(`Livro com id ${id} não encontrado.`);
        }
    }
};

export default livroRepository;
