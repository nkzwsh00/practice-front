// 7章　力試し

import {readFileSync} from "fs";

const text = readFileSync("uhyo.txt", "utf-8");
console.log(text);

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
