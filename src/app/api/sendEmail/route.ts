import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_URL_RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const { error } = await resend.emails.send({
            from: "AB.Memon.Portfolio@resend.dev",
            to: "aadil.shabir13@gmail.com",
            subject: `Portfolio Reach: ${subject}`,
            html: `
        <h2>New Contact Form Submission from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        if (error) {
            console.error("Error sending email:", error);
            return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Form submitted successfully!" });
    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ success: false, message: "Failed to submit form." }, { status: 500 });
    }
}
