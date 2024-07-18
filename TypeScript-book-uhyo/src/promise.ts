const main = async() => {
    console.log('Waiting for 3 seconds...')
    //
    // 3秒待つ
    await sleep(3000)
    console.log('Complete!')
}

const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, duration)
    })
}

main()