import { createTransport } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as any);

export const sendMail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error(error);
  }
};
