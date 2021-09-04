const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (a < 0 || b < 0) {
                return reject('Numbers should be Positive');
            }

            resolve(a + b);

        }, 1000)
    })
}

const doWork = async () => {
    try {
        const sum = await add(1, 99);
        const sum1 = await add(sum, 52);
        const sum2 = await add(sum1, 60);
        console.log("Output is:",sum2);

    } catch (err) {
        console.log(err);
    }

};
doWork(add);