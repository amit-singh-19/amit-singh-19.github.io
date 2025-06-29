const users = [];
// let user = {};
let currentUser = null;

const validateUser = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  // checking if user exists in users array
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  console.log(found);
  if (found) {
    currentUser = found;
    homePage(); // redirect to home page
  } else {
    document.getElementById("error-txt").innerHTML =
      "Invalid email or password";
  }
};

const userList = () => {
  if (users.length === 0) {
    return "No users found";
  } else {
    let str = "";
    users.forEach((value, index) => {
      str += `<p> ${index + 1}. ${value.name} - ${value.email}</p>`;
    });
    return str;
  }
};

const loginForm = () => {
  const str = `
    <div class="login-container" id="login-container">
    <h2> Login Form </h2>
    <p id="error-txt"></p>
    <p><label for="Email">Email</label></p> 
    <p><input type="email" id="email" placeholder="Enter email" required></p>
    <p><label for="Email">Password</label></p> 
    <p><input type="password" id="password" placeholder="Enter password" required></p>
    <p><button onclick="validateUser()" id="btn">Login</button></p>  
    <p>Don't have account?<button onclick="registerForm()" id="btn2">Create Account</button></p>  
    </div>
    <div class="user-container" id="user-container">
    <h2> List of Users </h2>
    ${userList()}
    </div>
    `;
  root.innerHTML = str;
};

const saveUser = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  // putting data in user object
  //   user.name = name;
  //   user.email = email;
  //   user.pass = pass;
  // pushing user object to users array
  users.push({
    name,
    email,
    pass, //we are pushing data in users array directly in object format previously we were creating user object and then pushing it but in that data saveed was the same last inputted data
    balance: 1000,
  });
  // console.log(users);

  loginForm(); // redirect to login form
};

const registerForm = () => {
  const str = `<div>
    <h2> Register Form </h2>
    <p><label for="name">Name</label></p>
    <p><input type="text" id="name" placeholder="Enter your name" required></p>
    <p><label for="Email">Email</label></p>
    <p><input type="email" id="email" placeholder="Enter email" required></p>
    <p><label for="password">Password</label></p>
    <p><input type="password" id="password" placeholder="Enter password" required></p>
    <p><button onclick="saveUser()" id="btn">Register</button></p>  
    <p>Already have account?<button onclick="loginForm()" id="btn2">Login Here...</button></p>  
    `;
  root.innerHTML = str + "</div>";
};

const homePage = () => {
  const str = `<div>
    <h2> Welcome, ${currentUser.name}</h2>
    <p class="balance"> Balance </p>
    <p class="balance-amt balance"> ₹${currentUser.balance} </p>
    <hr>
    <p class="amount""id="amount"><label for="amount" >Amount</label></p>
    <p><input type="text" id="amount" placeholder="Enter Amount" required></p>
    <button class="trans-btn" onclick="processTrans('deposit')"> Deposit </button>
    <button class="trans-btn" onclick="processTrans('withdraw')"> Withdraw </button>
    <p><button onclick="loginForm()" id="btn">Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
  console.log(currentUser)
};

const processTrans = (transType) => {
  let transAmount = parseFloat(document.getElementById("amount").value);
  if (!currentUser || isNaN(transAmount)) {
    alert("Invalid user or amount!!");
    return;
  }

  if (transType === "deposit") {
    currentUser.balance += transAmount;
  } else if (transType === "withdraw") {
    if (currentUser.balance < transAmount) {
      alert("Insufficient Balance!!");
      return;
    } else {
      currentUser.balance -= transAmount;
    }
  }

  homePage();
};
