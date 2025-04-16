document.getElementById('donationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  const method = document.getElementById('method').value;

  const numberMap = {
    bkash: "017XXXXXXXX (বিকাশ পার্সোনাল)",
    nagad: "018XXXXXXXX (নগদ)",
    rocket: "019XXXXXXXX (রকেট)"
  };

  if (method && numberMap[method]) {
    document.getElementById('paymentInfo').style.display = 'block';
    document.getElementById('number').textContent = numberMap[method];
  }
});// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPxLAGxkryMen13EiubF3hQgMG5RpEo1k",
  authDomain: "sardar-para-mosque-donation.firebaseapp.com",
  projectId: "sardar-para-mosque-donation",
  storageBucket: "sardar-para-mosque-donation.firebasestorage.app",
  messagingSenderId: "342506581589",
  appId: "1:342506581589:web:fddca8f02f393174f42edc",
  measurementId: "G-5JB6XTXJGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
