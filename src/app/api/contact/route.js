import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/utils/nodemailer";
import { Email } from "@/app/component/email/email";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Render the email content
    const emailHtml = render(
      <Email name={name} email={email} message={message} />
    );

    // Email options
    const mailOptions = {
      from: smtpEmail,
      to: "sterlinghomes22@gmail.com",
      subject: "New Form Submission",
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);

    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
