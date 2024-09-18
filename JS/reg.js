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
  
// Reference your database
var registrationFormDB = firebase.database().ref("registrationForm");
document.getElementById('regForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal('name'); // corrected variable name
    var email = getElementVal('email'); // corrected variable name
    var contact = getElementVal('contact'); // corrected variable name
    var password = getElementVal('password'); // corrected variable name
    
    
    saveMsg(name, email, contact, password);
    // console.log(name, email, contact, password);
    handleRegistrationSuccess();
    
    // Redirect to the main page after a delay (adjust the delay as needed)
    setTimeout(() => {
      window.location.href = 'home.html';
  }, 2000);
}
function handleRegistrationSuccess() {
    // Show the success alert
    document.getElementById('successAlert').classList.remove('hidden');
}

const saveMsg = (name, email, contact, password) =>{
  var newRegistrationForm = registrationFormDB.push();
  
  newRegistrationForm.set({
    name: name,
    email: email,
    contact: contact,
    password: password
  })
  
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
