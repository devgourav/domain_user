  "use strict";

  const functions = require('firebase-functions');
  const nodemailer = require("nodemailer");
  const admin = require("firebase-admin");

  const {
    google
  } = require("googleapis");
  admin.initializeApp();


  const OAuth2 = google.auth.OAuth2;
  const APP_NAME = "Namoyo.com";



  const clientID = "343922332278-0f6g6qdafn9618ai4t13qupgn1g01852.apps.googleusercontent.com";
  const clientSecret = "DSg-yOJGvE2156g91OdzfzOA";
  const refreshToken = "1//040h6osVzpMGaCgYIARAAGAQSNwF-L9Irwilm20lIp9LmAEeDJKeRPrzZ5tfw5ESzI360pPXR13fYmP1wV1dY9BndpPDkFkFwrxg"



  exports.sendMail = functions.https.onCall((data, context) => {
    const oauth2Client = new OAuth2(
      clientID,
      clientSecret, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: refreshToken
    });

    const accessToken = oauth2Client.getAccessToken()


    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "support@namoyo.com",
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken
      }
    });


    const email = data.email || null;
    const domain = data.domain || null;
    const offer = data.offer || null;
    const message = data.message || null;

    const mailOptions = {
      from: APP_NAME + ":" + email,
      to: "support@namoyo.com",
      subject: "Buy Offer for " + domain,
      generateTextFromHTML: true,
      html: "<p>Dear Admin,<p></br><b>Offer Amount:" + offer + "$</b></br>" + "<p>Domain:" + domain + "</p></br>" + "<p>Message:" + message + "</p>"
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      smtpTransport.close();
      return {
        status: success
      };
    });

  });


  exports.sendOrderMail = functions.https.onCall((data, context) => {
    const oauth2Client = new OAuth2(
      clientID,
      clientSecret, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: refreshToken
    });

    const accessToken = oauth2Client.getAccessToken()


    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "support@namoyo.com",
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken
      }
    });


    const email = data.email || null;
    const domain = data.domain || null;
    // const offer = data.offer || null;
    // const message = data.message || null;

    const mailOptions = {
      from: "Namoyo<support@namoyo.com>",
      to: email,
      subject: "Congratulations!.Your are now the owner of " + domain,
      generateTextFromHTML: true,
      html: "<p>Dear Customer,<p></br><p>Thankyou for using namoyo.com for your purchase.You will contact you shortly regarding the further process to transfer your domain.We appreciate your patience.</p><p>For any issues or queries feel free to reply to this mail.</p></br><p>Thanks and Regards,</br>Namoyo Support Team.<p>"
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response);
      smtpTransport.close();
      return {
        status: success
      };
    });
  })
