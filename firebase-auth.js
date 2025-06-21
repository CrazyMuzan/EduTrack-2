// 1. Your Firebase app configuration (replace with your actual config)
const firebaseConfig = {
   apiKey: "AIzaSyCjelf6cDjc91vaJERMF7hdbI0jBduKPyo",
  authDomain: "edutracker-35a4e.firebaseapp.com",
  projectId: "edutracker-35a4e",
  storageBucket: "edutracker-35a4e.firebasestorage.app",
  messagingSenderId: "1095610515936",
  appId: "1:1095610515936:web:db7fb65f2c7b849673eb85",
  measurementId: "G-SDLZ5Z7EJT"
  // ...other config values from Firebase Console
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// 3. Initialize Firestore
const db = firebase.firestore();

// 3. Login function
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById('loginPage').classList.add('hidden');
      document.getElementById('mainDashboard').classList.remove('hidden');
      // Call your updateSectionCounts() here if needed
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 4. Listen for login form submission (after DOM is loaded)
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  // Optional: Listen for auth state changes to show/hide dashboard
  auth.onAuthStateChanged((user) => {
    if (user) {
      document.getElementById('loginPage').classList.add('hidden');
      document.getElementById('mainDashboard').classList.remove('hidden');
    } else {
      document.getElementById('loginPage').classList.remove('hidden');
      document.getElementById('mainDashboard').classList.add('hidden');
    }
  });
});
