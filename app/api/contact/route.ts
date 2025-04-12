import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req: Request) {
  try {
    const { name, email, message, phone } = await req.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Set SendGrid API key
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SENDGRID_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    sgMail.setApiKey(apiKey);
    
    // Format the email
    const msg = {
      to: 'Sales@lovasenergy.com', // Change to your recipient email
      from: 'website@lovasenergy.com', // Change to your verified sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    // Send the email
    await sgMail.send(msg);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error processing contact form' },
      { status: 500 }
    );
  }
} 