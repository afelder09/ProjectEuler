const multipleOf = (num, dividor) => {
    if( num % dividor === 0) {
        return true
    } else {
        return false;
    }
}


console.log('Hello!')

let nums = [];

for( i=1;  i<1000; i++) {
    const multipleOf3 = multipleOf(i,3);
    const multipleOf5 = multipleOf(i,5);
    if(multipleOf3 || multipleOf5) {
        nums.push(i);
    }
}

let sum = nums.reduce((acc, num) => {
    return acc + num
}, 0)

console.log(nums)
console.log(sum)