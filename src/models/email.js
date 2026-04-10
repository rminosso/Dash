import nodemailer from "nodemailer";

export async function enviar() {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL,
            pass: process.env.GMAIL_PASSWORD
        },
    });

    let mailOptions = {
        from: '"Nome" <email@email>',
        to: "",
        subject: "Teste",
        text: "Olá teste",
        html: "<b>Olá</b>",
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw error;
    }
}
