//bcrypt module- use to hash password 
import bcrypt from "bcrypt";

const pwd = "pass1234";

//bcrypt return promise that's why we have used await here
// const hashedPwd = await bcrypt.hash(pwd, 10); //second parameter is the cost factor and 12 is more secure but it's slow
// console.log(hashedPwd);

const check = await bcrypt.compare(pwd, "$2b$10$ZyIj1RB3cAfTOjf3smpQOue.ttsXs42wJ4Cj7o9XfbtjIv5IJXZ5C");
console.log(check)