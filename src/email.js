const nodemailer = require("nodemailer");
const mysql = require('mysql2/promise');


async function enviar(fkEmpresa) {
    console.log("FK recebido:", fkEmpresa);

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        },
    });

    try{ const [rows] = await connection.execute(
        `select email FROM contato WHERE fkEmpresa = ?`,
        [fkEmpresa]);

        if (rows.length === 0) {
            console.log("Usuário não encontrado.");
            return;
        }
    
        //var nomeGestor = rows[0].nome;
        var emailGestor = rows[0].email;
        //var codigoAcesso = rows[0].codigoAcesso;

    

    let mailOptions = {
        from: `"Vooh" <${process.env.GMAIL_EMAIL}>`,
        to: `<${emailGestor}>`,
        subject: "Valide seu acesso na plataforma",
        text: "",
        html: `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; line-height: 1.6;">
    
    <h2 style="color: #0056b3;">Olá GESTOR! Seja bem-vindo(a) à VOOH!</h2>
    
    <p>Ficamos felizes em ter você conosco. Sua conta já foi configurada e está pronta para uso.</p>
    
    <p>Para garantir a segurança dos seus dados, seu primeiro acesso deve ser validado através do código de ativação abaixo:</p>

    <p style="margin-bottom: 5px;"><strong>Código de Ativação:</strong></p>
    <div style="background-color: #eef2f7; padding: 25px; text-align: center; border-radius: 10px; font-size: 26px; font-weight: bold; color: #0056b3; border: 1px dashed #0056b3; margin: 10px 0 25px;">
        <b>12345564TRE</b>
    </div>

    <p><strong>Passo a passo para começar:</strong></p>
    <ol style="padding-left: 20px;">
        <li>Acesse o a página de login do nosso site</a></li>
        <li>Entre com seu e-mail de cadastro.</li>
        <li>Insira o código de ativação acima para definir sua senha de acesso.</li>
    </ol>

    <p>Com o sistema da VOOH, você terá total controle sobre o monitoramento e a performance da infraestrutura dos seus displays. Nossa missão é garantir que você tenha os melhores insights em mãos.</p>

    <p>Se precisar de qualquer auxílio durante a configuração inicial, nossa equipe de suporte está à sua disposição.</p>

    <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;">

    <div style="text-align: center;">
        <img src="cid:logo" alt="Logo VOOH" style="width: 120px; height: auto;">
        <p style="font-size: 12px; color: #888;">
            <strong>Equipe VOOH</strong><br>
            Monitoramento Inteligente para Displays DOOH em centros urbanos
        </p>
    </div>

</div>
        `,

        attachments: [{
        filename: 'vooh-email.png',
        path: __dirname + '/../public/assets/images/vooh-email.png',
        cid: 'logo'
    }]
    };
 
        const info = await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw error;
    }finally {
        await connection.end();
    }

}


module.exports = { enviar };
    
