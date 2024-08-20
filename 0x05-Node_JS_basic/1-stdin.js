const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function acceptInput() {
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
}

if (!process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    acceptInput();
    const input = data.toString().trim();
    console.log(`Your name is: ${input}`);
    process.exit(0);
  });
} else {
  acceptInput();
}

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
