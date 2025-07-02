import fs, { appendFile } from "fs";

//------write------

// fs.writeFile("myfile.txt", "Hello Amit!!", (err) => {
//   if (err) throw err;
// });

//------Append------
// fs.appendFile("myfile.txt", "You are learning Nodejs\n", (err) => {
//   if (err) throw err;
// });

//-----READ-----
/*
fs.readFile("about.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

//-----Rename file------
/*
fs.rename("myfile.txt", "newfile.txt", (err) => {
  if (err) throw err;
});
*/

fs.unlink("newfile.txt", (err) => {
    if(err) throw err;
    console.log("File deleted successfully!")
})