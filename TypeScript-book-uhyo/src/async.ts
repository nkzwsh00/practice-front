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

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    });
}

async function get3(): Promise<number> {
    console.log('get3関数を実行します');
    await sleep(1000);
    console.log('1秒経過しました');
    return 3;
}

async function main() {
    console.log('main関数を実行します');
    const num1 = await get3();
    const num2 = await get3();
    const num3 = await get3();
    console.log(num1, num2, num3);
    return num1 + num2 + num3;
}

main().then(result => {
    console.log(`result: ${result}`);
});

