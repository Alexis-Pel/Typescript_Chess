export function test() {}
/*

// Use at least Nodemailer v4.1.0
import nodemailer from 'nodemailer';

export function sendEmailRecoverPassword(userMail: string) {
  // Generate SMTP service account from ethereal.email
  nodemailer.createTestAccount((err: any, account: any) => {
    if (err) {
      console.error('Failed to create a testing account. ' + err.message);
      return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    // Message object
    const message = {
      from: 'Sender Name <sender@example.com>',
      to: 'Recipient ' + userMail,
      subject: 'Nodemailer is unicode friendly ✔',
      text: 'Hello to myself!',
      html: '<p><b>Hello</b> to myself!</p>',
    };

    transporter.sendMail(message, (err: any, info: any) => {
      if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
      }

      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
}

*/
