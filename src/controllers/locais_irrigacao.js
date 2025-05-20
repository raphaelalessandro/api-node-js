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
                mensagem: 'Erro na listagem de locais Irrigação.',
                dados: error.message
            });
        }
    },

    async cadastrarlocais_irrigacao(request, response) {
        try {
            const { nome, status, id_usu } = request.body;

            const sql = `
                INSERT INTO locais_irrigacao (nome, status, id_usu)
                VALUES (?, ?, ?);
            `;

            const values = [nome, status, id_usu];

            const [result] = await db.query(sql, values);

            const dados = {
                id: result.insertId,
                nome,
                status,
                id_usu
            };

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de local de irrigação realizado com sucesso!',
                dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao cadastrar local de irrigação.',
                dados: error.message
            });
        }
    },

    async editarlocais_irrigacao(request, response) {
        try {
            const { nome, status, id_usu } = request.body;
            const { id } = request.params;

            const sql = `
                UPDATE locais_irrigacao
                SET nome = ?, status = ?, id_usu = ?
                WHERE id_loc_irriga = ?;
            `;

            const values = [nome, status, id_usu, id];

            await db.query(sql, values);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Alteração realizada com sucesso no local de irrigação!',
                dados: { id, nome, status, id_usu }
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao editar local de irrigação.',
                dados: error.message
            });
        }
    },

    async apagarlocais_irrigacao(request, response) {
        try {
            const { id } = request.params;

            const sql = `
                DELETE FROM locais_irrigacao WHERE id_loc_irriga = ?;
            `;

            await db.query(sql, [id]);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Local de irrigação excluído com sucesso.',
                dados: { id }
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao excluir local de irrigação.',
                dados: error.message
            });
        }
    }
};