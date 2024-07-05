type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`

//ここに追記
const lines: string[] = data.split('\n');
const users: User[] = lines.map((line) => {
    const [name, ageString, premiumUserString] = line.split(',');
    const age = parseInt(ageString, 10);
    const premiumUser = premiumUserString === '1';
    return { name, age, premiumUser };
})

for (const user of users) {
    if (user.name === '') continue;
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアム会員です`)
    } else {
        console.log(`${user.name} (${user.age})はプレミアム会員ではありません`)
    }
}