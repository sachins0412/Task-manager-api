const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "saxenas964@gmail.com",
      subject: `Welcome to Task-App, ${name}!`,
      text: "We hope you'll manage your tasks more effectly now !",
    })
    .then(() => {
      console.log("mail sent for enrollment");
    })
    .catch((e) => {
      console.log(e);
    });
};

const sendCancellationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "saxenas964@gmail.com",
      subject: `GoodBye , ${name}!`,
      text: "We are sorry to see you leave us. Would you spare a few mins please and let us what we could've done better ? !",
    })
    .then(() => {
      console.log("mail sent for deletion");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
