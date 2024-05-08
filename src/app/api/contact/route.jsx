import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "@/app/component/email/email";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const emailHtml = render(
      <Email name={name} email={email} message={message} />
    );

    const options = {
      from: smtpEmail,
      to: smtpEmail,
      subject: "New Form Submission",
      html: emailHtml,
    };

    await transporter.sendMail(options);

    return res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);

    return res.status(500).json({ error: "Failed to send email" });
  }
}
