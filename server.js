const express = require('express')
const app = express();
const admin = require('firebase-admin');

const serviceAccount = require('./admin_sdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ilmattic-art.firebaseio.com"
});

app.get("/users", async (req, res) => {
  fb.database().ref('/users').once('value').then(function(snapshot) {
    res.send(users);
  });
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);