function isPrime (num) {
    if(num <= 1 ) return false;
    if(num <= 3 ) return true;
    const sqrtNum = Math.floor(Math.sqrt(num));
    for(let i = 2 ; i <= sqrtNum; i++){
        if(num % i === 0) return false;
    }
    return true;
}

module.exports = {isPrime};