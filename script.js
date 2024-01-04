// function integrate(coeff, exponent) {
//   const newExponent = exponent + 1;
//   const newCoeff = coeff / newExponent;
//   return `${newCoeff}x^${newExponent} + C`;
// }
// const result = integrate(3, 2);
// console.log(result);



// let arr = "motion web IT academy"
// const enter = (str) => {
//     let result = str.trim(' ').split(' ').filter(el => {
//         return el !== el.toUpperCase()
//     }).map(el => {
//         return el[0].toUpperCase() + el.slice(1).toLowerCase()
//     }).join('')
//     return result !== ' '.replace(result.length) && result !== '' ?  '#' + result : false
// }
// console.log(enter(arr))




let arr = ''
const array = (str) => {
    let result = str.trim(' ').split(' ').filter(el => {
        return el !== el.toUpperCase()
    }).map(el => {
        return el[0].toUpperCase() + el.slice(1) .toLowerCase()
    }).join('')
    return result !== ' '.replace(result.length) && result !== '' ?  '#' + result : false
}
console.log(array(arr))