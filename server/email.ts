import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  projectType?: string;
}

export async function sendContactEmail({ name, email, phone, message }: ContactFormData): Promise<boolean> {
  // Configure your Gmail SMTP credentials in environment variables for security
  // .env example:
  // GMAIL_USER=contact@aakaarastudio.in
  // GMAIL_PASS=your_app_password
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error("Error sending contact email:", error);
    return false;
  }
}