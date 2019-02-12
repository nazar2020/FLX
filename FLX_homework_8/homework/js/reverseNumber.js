function reverseNumber(num) {
    if(num < 0) {
        num = Math.abs(num)
        return -parseInt(num.toString().split('').reverse().join(''))
    } else {
        return parseInt(num.toString().split('').reverse().join(''))
    }
}

reverseNumber();