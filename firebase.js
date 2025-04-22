import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAk4xPJsZmtxuCru4uALx_7BL3o2CNjsXc",
  authDomain: "paradayane-b7f4c.firebaseapp.com",
  projectId: "paradayane-b7f4c",
  storageBucket: "paradayane-b7f4c.appspot.com",
  messagingSenderId: "295979526073",
  appId: "1:295979526073:web:2bbf0afd5ef6e379e83868",
  measurementId: "G-EH73YZ80Q1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "galeria.html";
    })
    .catch((error) => {
      errorMsg.textContent = "E-mail ou senha incorretos.";
    });
});
