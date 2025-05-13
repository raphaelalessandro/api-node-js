const db = require('../database/connection'); 

module.exports = {
    async listarlocais_irrigacao(request, response) {
        try {

            const sql = `
            SELECT
            SELECT id_loc_irriga, nome, status, id_usu FROM locais_irrigacao;
           FROM locais-irrigacao
            `;

            const [rows] = await db.query(sql);
            
             
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de locais Irrigação', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na locais Irrigação.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarlocais_irrigacao(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de locais Irrigação', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na locais Irrigação.', 
                dados: error.message
            });
        }
    }, 
    async editarlocais_irrigacao(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no locais Irrigação', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na locais Irrigação.', 
                dados: error.message
            });
        }
    }, 
    async apagarlocais_irrigacao(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de locais Irrigação', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na locais Irrigação.', 
                dados: error.message
            });
        }
    }, 
};  