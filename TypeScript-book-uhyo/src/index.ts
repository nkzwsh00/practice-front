// 7章　力試し

import {readFileSync} from "fs";

const text = readFileSync("uhyo.txt", "utf-8");
console.log(text);

const count:number = text.indexOf("uhyo");

console.log(count);
