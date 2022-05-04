import nodemailer from 'nodemailer'

import { MailAdpter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "abe6834df388d2",
    pass: "45f8ddc2fab522"
  }
});

export class NodemailerMailAdapter implements MailAdpter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback Widgets <feedback-widgets@gmail.com>',
      to: 'Igor Cotrim <igorxuxicotrim@gmail.com>',
      subject,
      html: body
    })
  }
}