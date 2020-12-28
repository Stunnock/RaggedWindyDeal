/**
 * Операции с массивами
 * https://learn.javascript.ru/array#operatsii-s-massivami
 */

export function justDoIt() {
    const musicTypeArray = ['Джаз', 'Блюз'];
    console.log(musicTypeArray);

    musicTypeArray.push('Рок-н-ролл');
    console.log(musicTypeArray);

    const orderForChange = Math.floor(musicTypeArray.length / 2);
    musicTypeArray[orderForChange] = 'Классика';
    console.log(musicTypeArray);

    console.log(musicTypeArray.shift(), musicTypeArray);

    musicTypeArray.unshift('Рэп', 'Регги');
    console.log(musicTypeArray);
}
