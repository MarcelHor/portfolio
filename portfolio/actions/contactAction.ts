"use server";
import {Resend} from 'resend';

export const sendEmail = async (name: string, email: string, message: string) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not set");
    }

    if (!name || !email || !message) {
        throw new Error("Missing required fields");
    }

    if (name.length > 100 || name.length < 3 || email.length > 100 || email.length < 3 || message.length > 1000 || message.length < 3) {
        throw new Error("Invalid input length");
    }

    try {
        const {data, error} = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ["mar.horv22@gmail.com"],
            subject: "Portfolio - new message",
            html: `<h1>Message from ${name} - ${email}</h1><p>${message}</p>`,
        });

        if (error) {
            console.error("Error response from Resend:", error);
            throw new Error("Failed to send email");
        }

    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};
