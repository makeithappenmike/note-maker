const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error("Error:", err);
    } else {
      const dataArray = [];
      console.log("Data:", data);
      console.log("Data String", JSON.parse(data));
      // data.push(content);
      console.log("Content:", content);
      dataArray.push(JSON.parse(data));
      dataArray.push(content);
      console.log("Data Array Type:", typeof(dataArray));
      console.log("Data Array:", dataArray);
      // const parsedData = JSON.parse(content);
      // const parsedData = [];
      // parsedData.push(content);
      writeToFile(file, dataArray);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
