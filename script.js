const readline = require('readline');
const rl = readline.createInterface
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a year: ', (number) => {
  console.log('You entered: ', number);
  rl.close();
});