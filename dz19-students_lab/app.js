
const gruppa = [
    {student: 'Vasja', runLab: runLab(23)},
    {student: 'Tolja', runLab: runLab(25)},// помилка
    {student: 'olja', runLab: runLab(19)}

];

function gradeLabs(x) {
    try {
        x.forEach((item) => {
            if (item.runLab === correctResult() ) {
                throw new TypeError('lab.runLab is not a function');
            } else {
                console.log(`Лабораторія студента ${item.student} працює ${item.runLab}`)
            }

        })
    } catch (e) {
        console.log(e)
    }
}

function runLab(a) {
    return (a <= 20) ? 'Невдало' : 'Вдало';
}

function correctResult() {
    return 'Невдало';
}

console.log(gradeLabs(gruppa));