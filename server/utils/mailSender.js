const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      auth: {
        user: "karanraj7462@gmail.com",
        pass: "ostr vcix bcji pclr",
      },
    });

    let info = await transporter.sendMail({
      from: `"Internshify" <${process.env.MAIL_USER}>`,
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = mailSender;
