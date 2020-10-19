const express = require('express')
const app = express();
const admin = require('firebase-admin')

const serviceAccount = require('./admin_sdk.json')

const fb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stripe-tutorial-4168a.firebaseio.com"
})
console.log(fb);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);