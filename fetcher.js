const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const fileName = process.argv[3];



const requestAndSave = (url,fileName) => {
  request(url, (error, _ , body) => {
    if (error){
      console.log(error);
      return ;
    }
    fs.writeFile(fileName, body, err => {
      if (err) {
        console.error(err);
      }
  
    });
});
}
requestAndSave(url,fileName);