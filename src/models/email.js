import nodemailer from "nodemailer";

export async function enviar() {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "marleysantos439@gmail.com",
            pass: "ercx yxjh imkn mumh", // Use "App Passwords" do Gmail
        },
    });

    let mailOptions = {
        from: '"Marley" <marleysantos439@gmail.com>',
        to: "renan.msilva@sptech.school",
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
