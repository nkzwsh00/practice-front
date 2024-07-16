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

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration);
    })
};

sleep(3000).then(() => {
    console.log('3秒経過しました');
});