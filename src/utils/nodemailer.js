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
// console.log("SMTP Email (user):", process.env.GOOGLE_EMAIL);
// console.log(
//   "SMTP Password (first 4 chars):",
//   process.env.GMAIL_APP_PASSWORD?.slice(0, 4),
// );
// console.log("=== ENV DEBUG ===");
// console.log("GOOGLE_EMAIL:", process.env.GOOGLE_EMAIL);
// console.log("GMAIL_APP_PASSWORD:", process.env.GMAIL_APP_PASSWORD);
// console.log(
//   "All env keys with GOOGLE or GMAIL:",
//   Object.keys(process.env).filter(
//     (k) => k.includes("GOOGLE") || k.includes("GMAIL"),
//   ),
// );
// console.log("=================");

export const smtpEmail = process.env.GOOGLE_EMAIL;
