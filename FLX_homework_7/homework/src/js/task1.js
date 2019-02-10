let login = prompt ("Please enter login","");
if (login === "" || login === null) {
  alert ("Canceled.");
} else if (login.length < 4) {
  alert ("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin") {
  let pass = prompt ("Please enter password","");
  if (pass === "" || pass === null) {
    alert ("Canceled.");
  } else if (login === "User" && pass === "UserPass" || login === "Admin" && pass === "RootPass") {
    let time = new Date().getHours();
    let salute = time < 20 ? "Good day, " + login + "!" : "Good evening, " + login + "!";
    alert (salute);
  } else {
    alert ("Wrong password");
  }
} else {
  alert ("I don’t know you");
}