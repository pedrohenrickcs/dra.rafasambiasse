import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, cpf, rg, cep, message } = req.body

    // Configurar o transporte do email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'odontologiasambiasse@gmail.com',
        subject: `Informações do paciente ${name}`,
        html: `
          <h2>Informações do paciente</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>CPF:</strong> ${cpf}</p>
          <p><strong>RG:</strong> ${rg}</p>
          <p><strong>CEP:</strong> ${cep}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      })

      res.status(200).json({ message: 'Email enviado com sucesso' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      res.status(500).json({ error: 'Erro ao enviar email' })
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' })
  }
}
