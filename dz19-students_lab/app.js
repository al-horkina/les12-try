// const TypeErrorThrow = new TypeError('lab.runLab is not a function');

function gradeLabs(x) {
    try {
        x.forEach((item) => {
            if (!item.runLab){
                throw new TypeError('lab.runLab is not a function');
                console.log('errrr')
            }else{
                console.log(`Лабораторія студента ${item.student} працює ${item.runLab}`)
            }
        })
    } catch (e) {
        console.log(e)
    }
}

const gruppa = [
    {student: 'Vasja', runLab: runLab(23)},
    {student: 'Tolja', runLab: runLabsi(23)},// помилка
    {student: 'olja', runLab: runLab(20)}

];

function runLab(a) {
    return (a <= 20) ? 'Невдало' : 'Вдало';
}


// console.log(gruppa);
console.log(gradeLabs(gruppa));