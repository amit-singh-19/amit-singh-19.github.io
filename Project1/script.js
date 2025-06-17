const loginForm = () => {
    const str = `<div>
    <h3> Login Form </h3>
    <p><input type="email" placeholder="Enter email" required></p>
    <p><input type="password" placeholder="Enter password" required></p>
    <p><button onclick="homePage()">Login</button></p>  
    <p>Don't have account? <button onclick="registerForm()">Create Account</button></p>  
    `
    root.innerHTML = str + "</div>";
}

const registerForm = () => {
    const str = `<div>
    <h3> Register Form </h3>
    <p><input type="text" placeholder="Enter your name" required></p>
    <p><input type="email" placeholder="Enter email" required></p>
    <p><input type="password" placeholder="Enter password" required></p>
    <p><button onclick="loginForm()">Register</button></p>  
    <p>Already have account <button onclick="loginForm()">Login Here...</button></p>  
    `
    root.innerHTML = str + "</div>";
}

const homePage = () => {
    const str = `<div>
    <h3> Welcome to Home Page </h3>
    <p><button onclick="loginForm()">Logout</button></p>
    `
    root.innerHTML = str + "</div>";
}