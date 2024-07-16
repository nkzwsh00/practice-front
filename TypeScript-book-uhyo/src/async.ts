 const p = new Promise<number>((resolve) => {  
    setTimeout(() => {
        resolve(42);
    }
, 3000);
}  
);

p.then((value) => {
    console.log(value);
});