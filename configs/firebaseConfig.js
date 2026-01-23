import admin from "firebase-admin";

import  serviceAccount from "../gallery-hub-ac5f7-firebase-adminsdk-fbsvc-f166c6a23b.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


export default admin;
