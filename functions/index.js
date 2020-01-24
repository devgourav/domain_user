const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const {
  google
} = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  "343922332278-0f6g6qdafn9618ai4t13qupgn1g01852.apps.googleusercontent.com",
  "DSg-yOJGvE2156g91OdzfzOA", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: "1//040h6osVzpMGaCgYIARAAGAQSNwF-L9Irwilm20lIp9LmAEeDJKeRPrzZ5tfw5ESzI360pPXR13fYmP1wV1dY9BndpPDkFkFwrxg"
});
const accessToken = oauth2Client.getAccessToken()


exports.sendMail = functions.https.onCall((data, context) => {

  const email = data.email || null;
  const domain = data.domain || null;
  const offer = data.offer || null;
  const message = data.message || null;

  const mailOptions = {
    from: email,
    to: "support@namoyo.com",
    subject: "Offer for " + domain,
    generateTextFromHTML: true,
    html: "<b>Offer Amount:" + offer + "$</b></br>" + "<p>Message:" + message + "</p>"
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
    return {
      status: success
    };
  });

});
