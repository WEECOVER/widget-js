/* eslint-disable */
const fs = require('fs');

fs.readFile(`${process.cwd()}/src/utils/downloader.js`, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  if(!process.env.BASE_URI) throw new Error("process.env.BASE_URI don't exist!")
  const parsedData = data.replace(/%process.env.BASE_URI%/g, process.env.BASE_URI);
  fs.writeFileSync('./dist/downloader.js', parsedData, error => {
    if (error) throw new Error('Downloader has not been created');
    console.log('Downloader has been created');
  });
  return data.replace(/%process.env.BASE_URI%/g, 'hello world');
});
