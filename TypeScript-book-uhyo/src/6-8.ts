type Some<T> = {
    tag: 'Some';
    value: T;
};
type None = {
    tag: 'None';
};
type Option<T> = Some<T> | None;

function showNumberIfExists(obj: Option<number>): void {
    if (isSome(obj)) {
        console.log(obj.value);
    }
}

const four: Option<number> = { tag: 'Some', value: 4 };
const notihing: Option<number> = { tag: 'None' };

showNumberIfExists(four);
showNumberIfExists(notihing);

function isSome<T>(obj: Option<T>): obj is Some<T> {
    return obj.tag === 'Some';
}