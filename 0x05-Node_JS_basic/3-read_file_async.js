const fs = require('fs');
const { resolve } = require('path');

function countStudents(path) {
  const data = fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    }
    resolve(data);
  })
}