// calculator.js
// Cara pakai: node calculator.js
// Masukkan ekspresi seperti: 2+3*4 atau (1+2)/3

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'calc> '
});

console.log('Simple Node.js calculator. Type "exit" or Ctrl+C to quit.');
rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  if (!input) { rl.prompt(); return; }
  if (input.toLowerCase() === 'exit') { rl.close(); return; }

  try {
    // WARNING: menggunakan Function/eval -> jangan jalankan dengan input tak dipercaya.
    const fn = new Function('return (' + input + ')');
    const result = fn();
    console.log(result);
  } catch (err) {
    console.log('Error: tidak bisa evaluasi ekspresi. Pastikan format aritmetika benar.');
  }
  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
