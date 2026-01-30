import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `New Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed' }, { status: 500 });
    }
}