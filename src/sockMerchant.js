function sockMerchant(n, ar) {
    let socks = new Map();
    for(let i = 0; i < n; i++) {
        if(socks.has(ar[i])) {
            socks.set(ar[i], socks.get(ar[i]) + 1);
        } else {
            socks.set(ar[i], 1);
        }
    }
    let result = 0;
    let totals = Array.from(socks.values());
    for(let i = 0; i < totals.length; i++) {
        result += Math.floor(parseInt(totals[i]) / 2);
    }
    return result;
}
module.exports = sockMerchant;
