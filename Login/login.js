function login() {
  let usernames=document.querySelector(".email");
  let email=usernames.value;
  let passwords=document.querySelector(".password");
  let password=passwords.value;
  console.log(email);
  console.log(password);

  if(Storage!=="undefined")
  {
    const users=JSON.parse(localStorage.getItem("users"))||[];

    const user= users.find(u=>u.email===email && u.password=== password)
    const username = user.username;

    if(user){
      alert("Login Successful");
      sessionStorage.setItem('currentUser',username);  
      window.location="../Home/home.html";
  
    }
    else{
      alert("user not found or incorrect password");
    }
  }
}
  
 