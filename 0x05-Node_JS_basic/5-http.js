const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(path)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${data.students.length}\n`);
        for (const field of data.fields) {
          const studentsInField = data.students.filter((student) => student.split(',')[3] === field);
          const names = studentsInField.map((student) => student.split(',')[0]);
          res.write(`Number of students in ${field}: ${studentsInField.length}. List: ${names.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.write('This is the list of our students\n');
        res.write(error.message);
      });
  }
});

const port = 1245;
app.listen(port);

module.exports = app;
