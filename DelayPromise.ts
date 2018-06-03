function delay(time: number): Promise<void> {
    return new Promise<void>(((resolve: void, reject) => {
        setTimeout(resolve, time);
    }));
}

delay(10000)
    .then(() => console.log('hello'))
    .catch((err) => console.error(err));