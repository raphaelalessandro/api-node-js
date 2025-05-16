const db = require('../database/connection'); 

module.exports = {
    async listarlocais_irrigacao(request, response) {
        try {

            const sql = `
            SELECT id_loc_irriga, nome, status, id_usu 
           FROM locais_irrigacao
            `;

            const [rows] = await db.query(sql);
            
             
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de locais Irrigação', 
                itens: rows.length,
                dados: rows
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

            const { nome, status, id_usu} = request.body;
            const locais_irrigacao_ativo = 1;
            const sql = `
            INSERT INTO locais_irrigacao
                    ( nome, status, id_usu)
            VALUES 
                    (?, ?, ?,);
            `;

            const values = [nome, status, id_usu];

            const [result] = await db.query(sql, values);

            const dados = {
                nome,
                status
            };
            
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
            const {nome, status, id_usu} = request.body;
            const {id} = request.params;
            const sql = `
            UPDATE locais_irrigacao SET 
                 nome = ?, status, id_usu
            `
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