//Test data
//dolphins scores 44, 23, 71
//koales scores 65, 54, 49
const dolphinsScore = [44, 23, 71];
const koalesScore = [65, 54, 49];


const calcAverage = (arr) => {
    const result = arr.reduce((acc, cur) => 
        acc + cur
    )
    return result/arr.length;
}

const checkWinner = (arr1, arr2) => {
 const score1 = calcAverage(arr1);
 const score2 = calcAverage(arr2);
}

