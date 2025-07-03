//promise

/*
const f1 = () => {
    setTimeout(()=>{
        return 5;
    }, 1000);
    // return 5;
}

const f2 = (x) => {
    console.log(x+6);
}

const n = f1();
f2(n);
*/


// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     return 5;
//   });
// };

// const f2 = (x) => {
//     console.log(x+6);
// }

// const n = f1();
// f2(n);



const f1 = () => {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
};

const f2 = (x) => {
  console.log(x + 6);
};

f1().then((n) => f2(n));


/*
const f1 = () => {
  return new Promise((resolve, reject) => {
    reject("Somethig went wrong!!");
  });
};

const f2 = (x) => {
  console.log(x + 6);
};

f1()
  .then((n) => f2(n))
  .catch((err) => console.log(err));
*/

/*
const f1 = (n) => {
//   let n = -1;
  return new Promise((resolve, reject) => {
    if (n > 0) resolve(n);
    else reject("Invalid Input!!");
  });
};

const f2 = (x) => {
  console.log(x + 10);
};

f1(10)
  .then((n) => f2(n))
  .catch((err) => console.log(err));
*/

//fetch function is used to make HTTP requests to server - like getting data from an API
//It return Promise ,so it's asynchronous and work great with .then()

/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())     
  .then((data) => {
    let str = "";
    data.forEach((value) => {
      str += `Name: ${value.name} - Email: ${value.email}\n`
    });
    console.log(str);
  })
  .catch((err) => console.log("Something went wrong!!"));
*/

//Async/await

/*
 line 105 will only work when line 104 is completed and we know that fetch return promise so we can use await here same in data also
 if we are using await then we have to make this function async then only await work
 */
// const fetchData = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   data.forEach((value) => {
//     console.log(value.name);
//   });
// };
// fetchData();
