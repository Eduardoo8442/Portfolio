require('dotenv').config();
exports.index = (req, res) => {
const transporter = require('../config/nodeMailer');
console.log(req.body)
const { email, assunto, conteudo } = req.body;
const mailOptions = {
  from: email,
  to: process.env.EMAIL,
  subject: assunto,
  text: conteudo,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error)
    return res.status(400).json({ message: `Erro ao enviar email` });
  }
  return res.status(200).json({ message: `Email enviado com sucesso!` });
});
  };