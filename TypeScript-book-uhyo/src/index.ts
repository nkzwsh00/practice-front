// 7章　力試し

// import {readFileSync} from "fs";
// import path from "path";
// import {fileURLToPath} from "url";

// const __currentPath = fileURLToPath(import.meta.url);
// console.log(__currentPath);
// const __currentDirectory = path.dirname(__currentPath);
// console.log(__currentDirectory);
// const __filePath = path.join(__currentDirectory, "../uhyo.txt");
// console.log(__filePath);

// const text = readFileSync(__filePath, "utf-8");
// console.log(text);

// const textLength:number = text.length;
// let count:number = 0;
// let currentIndex:number = 0;

// while (currentIndex < textLength) {
//     const index = text.indexOf("uhyo", currentIndex);
//     if (index === -1) {
//         break;
//     }
//     currentIndex = index + 1;
//     count++;
// }

// console.log(count);
