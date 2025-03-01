import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
// console.log(process.env.GOOGLE_EMAIL);
// console.log("GOOGLE_APP_PASSWORD from ENV:", process.env.GMAIL_APP_PASSWORD);
// console.log(process.env);

export const smtpEmail = process.env.GOOGLE_EMAIL;
