let furniture = ['Table', 'Chairs', 'Couch'];
for (let index = 0; index < furniture.length; index++) {
    const name = furniture[index];
    console.log(name);
    let iterator = name[Symbol.iterator]();
    while (true) {
        let result = iterator.next();
        if (result.done) break;
        console.log(result.value);
    }
}