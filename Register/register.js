function Register()
{
  let e=document.querySelector(".email");
  let email=e.value;
  let userna=document.querySelector(".username");
  let username=userna.value;
  let pass=document.querySelector(".password");
  let password=pass.value;
  let confirm=document.querySelector(".confirmPassword");
  let confirmPassword=confirm.value;

  if(password!==confirmPassword)
  {
    alert("Password do not matchc");
  }
  const user={email, username, password,score:0};
  if(Storage!=="undefined")
  {
    const users=JSON.parse(localStorage.getItem("users"))||[];

    if(users.some(u=>u.username===username))
    {
      alert("Username already exists.Choose the other username");
      return;
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    alert("Registration successful");
    window.location="../Login/login.html";
  }
  else{
    alert( "Local storage isnot supported by the browser.");
  }
}