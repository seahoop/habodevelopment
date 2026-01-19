import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Email configuration
  const recipientEmail = 'zhengyuandu2005311@gmail.com';
  
  const emailSubject = `${subject} - Contact Form from ${name}`;
  const emailBody = `
New contact form submission from Habo Development website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
You can reply directly to: ${email}
This email was sent from the Habo Development contact form.
  `.trim();

  try {
    // Try using Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Habo Development <onboarding@resend.dev>', // Update with your verified domain
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      });
    } else {
      // Fallback: Use nodemailer with SMTP if configured
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
        });
      } else {
        // Log for development (emails will be sent in production with proper config)
        console.log('📧 Email would be sent to:', recipientEmail);
        console.log('Subject:', emailSubject);
        console.log('From:', email);
        console.log('Body:', emailBody);
        console.log('\n💡 To enable email sending, configure RESEND_API_KEY or SMTP settings in .env.local');
      }
    }

    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}

