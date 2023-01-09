const fs = require('fs'); // include the filesystem module

// get a list of all the photos in the folder
fs.readdir('/path/to/photos/folder', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // select two random photos from the list
  const photo1Index = Math.floor(Math.random() * files.length);
  let photo2Index = Math.floor(Math.random() * (files.length - 1));
  if (photo2Index >= photo1Index) {
    photo2Index += 1;
  }
  const photo1 = files[photo1Index];
  const photo2 = files[photo2Index];

  // display the photos on the page
  document.getElementById('photo1').src = '/path/to/photos/folder/' + photo1;
  document.getElementById('photo2').src = '/path/to/photos/folder/' + photo2;
});

// handle the user's vote
document.getElementById('vote1').addEventListener('click', () => {
  // update the vote count for photo1 in the database
});
document.getElementById('vote2').addEventListener('click', () => {
  // update the vote count for photo2 in the database
});
const mysql = require('mysql'); // include the MySQL module

const connection = mysql.createConnection({
  host: 'localhost', // the hostname of the database server
  user: 'user', // the username for the database
  password: 'password', // the password for the database
  database: 'database' // the name of the database
});

// update the vote count for photo1
connection.query('UPDATE photos SET votes = votes + 1 WHERE id = ?', [photo1Id], (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Updated vote count for photo ${photo1Id}`);
  }
});

// update the vote count for photo2
connection.query('UPDATE photos SET votes = votes + 1 WHERE id = ?', [photo2Id], (error, results) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Updated vote count for photo ${photo2Id}`);
  }
});

connection.end(); // close the connection to the database
