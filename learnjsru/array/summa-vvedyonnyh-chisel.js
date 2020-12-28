/**
 * Сумма введённых чисел
 * https://learn.javascript.ru/array#summa-vvedyonnyh-chisel
 */

export function sumInput() {
    const acc = [];
    let sum = 0;

    do {
        let newValue = prompt('Введите значение');
        if (isNaN(newValue)) break;
        acc.push(newValue);
    } while (true);


    for (let i = 0; i < acc.length; i++) {
        sum += acc[i];
    }

    return sum;
}
