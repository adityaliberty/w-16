const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It's working");
        //    reject("it's not working");
    }, 2000)
});

doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log('Error!', error);
}).finally(() => {
    console.log('"this will run always"');
})