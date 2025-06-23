import sgMail from '@sendgrid/mail';

// Check if SendGrid API key is available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY not found. Email functionality will be disabled.');
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  projectType?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    return false;
  }

  try {
    const msg = {
      to: 'contact@aakaarastudio.in',
      from: 'contact@aakaarastudio.in', // This should be a verified sender in SendGrid
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7f6a4d;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5a3a22; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
            ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5a3a22; margin-top: 0;">Subject</h3>
            <p>${data.subject}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5a3a22; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <hr style="border: 1px solid #d9c4b0; margin: 30px 0;">
          
          <p style="color: #7f6a4d; font-size: 14px;">
            This message was sent from the Aakaara Studio contact form.
          </p>
        </div>
      `,
    };

    await sgMail.send(msg);
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact email:', error);
    return false;
  }
}