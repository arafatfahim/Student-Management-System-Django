importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyC38KmYdBbntqTvQls4bWBLDyHsqjIfQ68",
  authDomain: "studentmanagementsystem-534b8.firebaseapp.com",
  projectId: "studentmanagementsystem-534b8",
  storageBucket: "studentmanagementsystem-534b8.appspot.com",
  messagingSenderId: "301271569083",
  appId: "1:301271569083:web:dd2c799ac692b42acd0f9e",
  measurementId: "G-N8YGLLHY69"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});