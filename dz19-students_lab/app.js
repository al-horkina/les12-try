
const gruppa = [
    {student: 'Vasja', runLab: runLab(23)},
    {student: 'Tolja', runLab: runLabsi(23)},// помилка
    {student: 'olja', runLab: runLab(20)}

];

function gradeLabs(x) {
    try {
        x.forEach((item) => {
            if (item.runLab !== String) {
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

console.log(gradeLabs(gruppa));