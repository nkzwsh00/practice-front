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

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアム会員です`)
    } else {
        console.log(`${user.name} (${user.age})はプレミアム会員ではありません`)
    }
}