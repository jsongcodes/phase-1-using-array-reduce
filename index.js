const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(function (number, sum) {
//     sum = number + number;
//     return sum;
// })

const totalBatteries = batteryBatches.reduce((sum, num) => sum + num, 0);