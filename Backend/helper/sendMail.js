// // const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer"

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "yogeshkumar86077@gmail.com",
//     pass: "nmlmmebigqzfzsvy",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function sendMail(to,subject,text,html) {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: 'yogeshkumar86077@gmail.com', // sender address
//     to,
//     subject,
//     text,
//     html,
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);
// export default sendMail;

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "yogeshkumar86077@gmail.com",
    pass: "nmlmmebigqzfzsvy",
  },
});

async function sendMail(to, subject, text, html) {
  const info = await transporter.sendMail({
    from: 'yogeshkumar86077@gmail.com', // sender address
    to,
    subject,
    text,
    html,
  });

  console.log("Message sent: %s", info.messageId);
}

export { sendMail };



// 

// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: 'smtp.mailgun.org',
//   port: 587,
//   secure: false, // use TLS
//   auth: {
//     user: 'postmaster@sandboxe6d3c82d00cd492a957e04e27848c835.mailgun.org',
//     pass: 'fe9cf0a8-5ba4f8ad',
//   },
// });

// async function sendMail(to, subject, text) {
//   try {
//     const info = await transporter.sendMail({
//       from: 'postmaster@sandboxe6d3c82d00cd492a957e04e27848c835.mailgun.org',
//       to,
//       subject,
//       text,
//     });

//     console.log('Message sent: %s', info.messageId);
//     return true;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return false;
//   }
// }

// export { sendMail };
