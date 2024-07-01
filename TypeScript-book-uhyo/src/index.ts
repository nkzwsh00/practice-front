// const message: string = 'Hello, world!';

// console.log(message);

// const greeting: string = 'Hello, ';
// const target: string = 'world!!!';
// const text: string = greeting + target;
// console.log(text);

import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question('文字列を入力してください：', (line) => {
//   console.log(`${line}が入力されました。`);
//   readline.close();
// });

readline.question('数値を入力してください：', (line) => {
  const num: number = Number(line);
  console.log(num + 1000);
  readline.close();
});