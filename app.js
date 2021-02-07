const fs = require('fs')
const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

 

  profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

// const generatePage = (userName, githubName) => {
//   return `
//   <!DOCTYPE html>
//   <html lang='en'>
//   <head>
//       <meta charset="UTF-8">
//       <meta name='viewport' content='width=device-width, initial-scaled=1.0'>
//       <meta http-equiv="X-UA-Compatable" content='ie-edge'>
//       <title> Portfolio Demo</title>
//   </head>
//   <body>
//       <h1>${name}</h1>
//       <h2><a href="https//github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//    `;}
