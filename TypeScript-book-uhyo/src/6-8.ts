// type Some<T> = {
//     tag: 'some';
//     value: T;
// };
// type None = {
//     tag: 'none';
// };
// type Option<T> = Some<T> | None;

// function showNumberIfExists(obj: Option<number>): void {
//     if (isSome(obj)) {
//         console.log(obj.value);
//     }
// }

// const four: Option<number> = { tag: 'some', value: 4 };
// const notihing: Option<number> = { tag: 'none' };

// // showNumberIfExists(four);
// // showNumberIfExists(notihing);

// function isSome<T>(obj: Option<T>): obj is Some<T> {
//     return obj.tag === 'some';
// }

// function doubleOption(obj: Option<number>) {
//     return mapOption(obj, x => x * 2);
// }

// console.log(doubleOption(four));
// console.log(doubleOption(notihing));

// function mapOption<T, U>(obj: Option<T>, f: (value: T) => U): Option<U> {
//     if (isSome(obj)) {
//         return { tag: 'some', value: f(obj.value) };
//     } else {
//         return { tag: 'none' };
//     }
// }
