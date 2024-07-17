//  const p = new Promise<number>((resolve) => {  
//     setTimeout(() => {
//         resolve(42);
//     }
// , 3000);
// }  
// );

// p.then((value) => {
//     console.log(value);
// });

// const sleep = (duration: number) => {
//     return new Promise<void>((resolve) => {
//         setTimeout(resolve, duration);
//     })
// };

// sleep(3000).then(() => {
//     console.log('3秒経過しました');
// });

// const sleep = (duration: number) => {
//     return new Promise<void>((resolve) => {
//         setTimeout(resolve, duration);
//     });
// }

// async function get3(): Promise<number> {
//     console.log('get3関数を実行します');
//     await sleep(1000);
//     console.log('1秒経過しました');
//     return 3;
// }

// async function main() {
//     console.log('main関数を実行します');
//     const num1 = await get3();
//     const num2 = await get3();
//     const num3 = await get3();
//     console.log(num1, num2, num3);
//     return num1 + num2 + num3;
// }

// main().then(result => {
//     console.log(`result: ${result}`);
// });

// async function main() {
//     const { readFile, writeFile } = await import('fs/promises');

//     const fooContent = await readFile('foo.txt', 'utf-8');
//     await writeFile('bar.txt', fooContent + fooContent);
//     console.log('ファイルの書き込みが完了しました');
// }

// main().then(() => {
//     console.log('main関数が完了しました');
// });


// 8章　力試し

// import {readFileSync} from "fs";
import {readFile} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __currentPath = fileURLToPath(import.meta.url);
const __currentDirectory = path.dirname(__currentPath);
const __filePath = path.join(__currentDirectory, "../uhyo.txt");

const text = await readFile(__filePath, "utf-8");

const textLength:number = text.length;
let count:number = 0;
let currentIndex:number = 0;

while (currentIndex < textLength) {
    const index = text.indexOf("uhyo", currentIndex);
    if (index === -1) {
        break;
    }
    currentIndex = index + 1;
    count++;
}

console.log(count);
