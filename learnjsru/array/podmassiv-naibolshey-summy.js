/**
 * Подмассив наибольшей суммы
 * 
 */

export function getMaxSubSum(arr) {
    let maxSum = 0;

    const sumStr = (num) => {
        let maxSumStr = 0;
        let sum = 0;

        for (let i = num; i < arr.length; i++) {
            sum += arr[i];
            maxSumStr = Math.max(maxSumStr, sum);
        }

        return maxSumStr;
    }

    for (let i = 0; i < arr.length; i++) {
        maxSum = Math.max(maxSum, sumStr(i));
    }
    console.log(arr, ' = ', maxSum);
}
