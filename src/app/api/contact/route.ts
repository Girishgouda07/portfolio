import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'contact@yeshwanth.live',
            to: 'girish18112004@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio Contact</title>
        </head>
        <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="background: linear-gradient(135deg, #5237f9, #6b46f9); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="margin: 0; color: white; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background-color: #141414; padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <h2 style="color: #5237f9; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5237f9;">Name:</strong>
              <span style="margin-left: 10px; color: #ffffff;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5237f9;">Email:</strong>
              <span style="margin-left: 10px; color: #ffffff;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5237f9;">Subject:</strong>
              <span style="margin-left: 10px; color: #ffffff;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5237f9;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #0a0a0a; border-radius: 4px; border-left: 3px solid #5237f9; color: #ffffff; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #141414; border-radius: 8px; text-align: center; color: #888;">
            <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
          </div>
        </body>
        </html>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: 'Email sent successfully',
                id: data?.id
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
