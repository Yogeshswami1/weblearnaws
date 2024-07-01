// // import Email from '../models/emailModel.js'
// import Email from '../models/emailModel.js';
// import nodemailer from 'nodemailer';
// import {sendMail} from "../helper/sendMail.js"
// // Register email
// // export const registerEmail = async (req, res) => {
// //   const { email , password , name} = req.body;
// //   try {
// //     const newEmail = new Email({ email });
// //     await newEmail.save();
// //     sendMail(email,"Welcome to saumi craft ,`Hi , ${name}` Thankyou for registering")
// //     res.status(201).send('Email registered');
// //   } catch (error) {
// //     res.status(500).send('Error registering email');
// //   }
// // };

// export const registerEmail = async (req, res) => {
//     const { email, name } = req.body;
//     try {
//       const newEmail = new Email({ email ,name});
//       await newEmail.save();
  
//       const subject = "Welcome to Saumi Craft";
//       const text = `Hi ${name}, Thank you for registering.`;
//       const html = `
//         <h1>Welcome to Saumi Craft</h1>
//         <p>Hi ${name},</p>
//         <p>Thank you for registering.</p>
//         <p>Best regards,<br>Saumi Craft Team</p>
//       `;
  
//       await sendMail(email, subject, text, html);
  
//       res.status(201).send('Email registered');
//     } catch (error) {
//       console.error('Error registering email:', error);
//       res.status(500).send('Error registering email');
//     }
//   };
// // Send updates
// export const sendUpdates = async (req, res) => {
//   try {
//     const emails = await Email.find();
//     const emailList = emails.map(e => e.email);

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: "yogeshkumar86077@gmail.com",
//           pass: "nmlmmebigqzfzsvy",
//         },
//       });
  
//       const mailOptions = {
//         from: "yogeshkumar86077@gmail.co",
//         to: emailList,
//         subject: 'New Update in Regular Updates',
//         text: 'There is a new update. Please check it out.',
//       };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).send('Error sending emails');
//       }
//       res.send('Updates sent');
//     });
//   } catch (error) {
//     res.status(500).send('Error sending updates');
//   }
// };



// import Email from '../models/emailModel.js';
// import { sendMail } from '../helper/sendMail.js';

// // Register email
// export const registerEmail = async (req, res) => {
//   const { email, name } = req.body;
//   try {
//     const newEmail = new Email({ email, name });
//     await newEmail.save();

//     const subject = "Welcome to Saumi Craft";
//     const text = `Hi ${name}, Thank you for registering.`;
//     const html = `
//       <h1>Welcome to Saumi Craft</h1>
//       <p>Hi ${name},</p>
//       <p>Thank you for registering.</p>
//       <p>Best regards,<br>Saumi Craft Team</p>
//     `;

//     await sendMail(email, subject, text, html);

//     res.status(201).send('Email registered');
//   } catch (error) {
//     console.error('Error registering email:', error);
//     res.status(500).send('Error registering email');
//   }
// };

// // Send updates
// export const sendUpdates = async (req, res) => {
//   const { updateContent } = req.body;
//   try {
//     const emails = await Email.find();
//     const emailList = emails.map(e => e.email);

//     const subject = 'New Update in Regular Updates';
//     const text = 'There is a new update. Please check it out.';
//     const html = `
//       <h1>New Update</h1>
//       <p>There is a new update in our training program. Please <a href="#">check it out</a>.</p>
//       <p>Update Content: ${updateContent}</p>
//     `;

//     await sendMail(emailList, subject, text, html);

//     res.send('Updates sent');
//   } catch (error) {
//     console.error('Error sending updates:', error);
//     res.status(500).send('Error sending updates');
//   }
// };


// import Email from '../models/emailModel.js';
// import { sendMail } from '../helper/sendMail.js';

// // Register email
// export const registerEmail = async (req, res) => {
//   const { email, name } = req.body;
//   try {
//     const newEmail = new Email({ email, name });
//     await newEmail.save();

//     const subject = "Welcome to Saumi Craft";
//     const text = `Hi ${name}, Thank you for registering.`;
//     const html = `
//       <h1>Welcome to Saumi Craft</h1>
//       <p>Hi ${name},</p>
//       <p>Thank you for registering.</p>
//       <p>Best regards,<br>Saumi Craft Team</p>
//     `;

//     await sendMail(email, subject, text, html);

//     res.status(201).send('Email registered');
//   } catch (error) {
//     console.error('Error registering email:', error);
//     res.status(500).send('Error registering email');
//   }
// };

// // Send updates
// export const sendUpdates = async (req, res) => {
//   const { updateContent } = req.body;
//   try {
//     const emails = await Email.find();
//     const emailList = emails.map(e => e.email);

//     const subject = 'New Update in Regular Updates';
//     const text = 'There is a new update. Please check it out.';
//     const html = `
//       <h1>New Update</h1>
//       <p>There is a new update in our training program. Please <a href="https://websitelearning.saumic.com/">check it out</a>.</p>
//       <p>Update Content: ${updateContent}</p>
//     `;

//     for (let email of emailList) {
//       await sendMail(email, subject, text, html);
//     }
//     res.send('Updates sent');
//   } catch (error) {
//     console.error('Error sending updates:', error);
//     res.status(500).send('Error sending updates');
//   }
// };


import Email from '../models/emailModel.js';
import { sendMail } from '../helper/sendMail.js';

// Register email
export const registerEmail = async (req, res) => {
  const { email, name } = req.body;
  try {
    const newEmail = new Email({ email, name });
    await newEmail.save();

    const subject = "Welcome to Saumi Craft";
    const text = `Hi ${name}, Thank you for registering.`;
    const html = `
      <h1>Welcome to Saumi Craft</h1>
      <p>Hi ${name},</p>
      <p>Thank you for registering.</p>
      <p>Best regards,<br>Saumi Craft Team</p>
    `;

    await sendMail(email, subject, text, html);

    res.status(201).send('Email registered');
  } catch (error) {
    console.error('Error registering email:', error);
    res.status(500).send('Error registering email');
  }
};

// Send updates
export const sendUpdates = async (req, res) => {
  const { updateContent } = req.body;
  try {
    const emails = await Email.find();
    const emailList = emails.map(e => e.email);

    const subject = 'New Update in Regular Updates';
    const text = 'There is a new update. Please check it out.';
    const html = `
      <h1>New Update</h1>
      <p>There is a new update in our training program. Please <a href="https://websitelearning.saumic.com/">check it out</a>.</p>
      <p>Update Content: ${updateContent}</p>
    `;

    // Send emails concurrently
    const emailPromises = emailList.map(email => sendMail(email, subject, text, html));
    await Promise.all(emailPromises);

    res.send('Updates sent');
  } catch (error) {
    console.error('Error sending updates:', error);
    res.status(500).send('Error sending updates');
  }
};
