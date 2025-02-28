import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});
//Testing
export const smtpEmail = process.env.GOOGLE_EMAIL;
