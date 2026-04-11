const uploadModel = require('../models/uploadModel');
const { spawn } = require('child_process');
const path = require('path');

function upload(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ erro: "Arquivo não enviado" });
        }

        const file = req.file.filename;
        const { usuario, ip } = req.body;

        const caminhoArquivo = path.join(__dirname, '../../public/storage', file);

        const dados = { usuario, ip, file };

        const python = spawn(
            './.venv/bin/python',
            [
                path.join(__dirname, '../../../scripts/ssh.py'),
                caminhoArquivo,
                usuario,
                ip
            ]
        );

        let resultado = "";
        let erro = "";

        python.stdout.on('data', (data) => {
            resultado += data.toString();
        });

        python.stderr.on('data', (data) => {
            erro += data.toString();
        });

        python.on('close', (code) => {
            if (code !== 0) {
                return res.status(500).json({
                    erro: "Erro ao executar Python",
                    detalhe: erro
                });
            }

            return res.json({
                mensagem: "Upload + Python executado",
                python: resultado
            });
        });

    } catch (erro) {
        return res.status(500).json({ erro: erro.message });
    }
}

module.exports = {
    upload
};