const animal = [
    {name: 'cat', num: 1},
    {name: 'dog', num: 2},
    {name: 'elephant', num: 3},
    {name: 'tiger', num: 4}
];

function showAnimal(arr, a) {
    try {
        if (a in arr) {
            arr.forEach((item) => {
                if (item.num === a) {
                    console.log(`${item.name}`)
                }
            })
        } else {
            throw new TypeError('Невірний індекс');
        }

    }
    catch (e) {
        console.log(e);
    }
}

showAnimal(animal, 3);
showAnimal(animal, 5); // помилка

