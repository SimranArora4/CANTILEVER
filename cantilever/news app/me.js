

/* import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgVqz5LK1Ds6kDq40PjQOq_YEusrMD7is",
  authDomain: "newsletter-508f2.firebaseapp.com",
  projectId: "newsletter-508f2",
  storageBucket: "newsletter-508f2.appspot.com",
  messagingSenderId: "522654977538",
  appId: "1:522654977538:web:72dbd39fcf71ec36ee211b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        uid: user.uid
      };
      set(ref(database, `users/${user.uid}`), userData)
        .then(() => {
          alert("User created, please log in");
          window.location.assign("news app/login/index.html");
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        lastLogin: new Date().toISOString()
      };
      update(ref(database, `users/${user.uid}`), userData)
        .then(() => {
          alert("User logged in");
          window.location.assign("news app/index.html");
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
}
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgVqz5LK1Ds6kDq40PjQOq_YEusrMD7is",
  authDomain: "newsletter-508f2.firebaseapp.com",
  projectId: "newsletter-508f2",
  storageBucket: "newsletter-508f2.appspot.com",
  messagingSenderId: "522654977538",
  appId: "1:522654977538:web:72dbd39fcf71ec36ee211b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

window.register = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        uid: user.uid
      };
      set(ref(database, `users/${user.uid}`), userData)
        .then(() => {
          alert("User created, please log in");
          window.location.assign("news app/login/index.html");
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
}

window.login = function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        lastLogin: new Date().toISOString()
      };
      update(ref(database, `users/${user.uid}`), userData)
        .then(() => {
          alert("User logged in");
          window.location.assign("news app/index.html");
        })
        .catch((error) => {
          alert(error.message);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
}
