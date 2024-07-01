import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("数値を入力してください：", (line) => {
  const num: number = Number(line);
  for (let i = 1; i <= num; i++) {
    if (i > 1) {
      process.stdout.write(" ");
    }
    if (i % 3 === 0 && i % 5 === 0) {
      process.stdout.write("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      process.stdout.write("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      process.stdout.write("Buzz");
      continue;
    }
    process.stdout.write(String(i));
  }
  readline.close();
});
