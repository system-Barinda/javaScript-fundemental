// function findShort(s){
//    return  Math.min(...s.split(' ').map(a => a.length));
// }
// const word = "barinda andaasa myyyaa name isd";
// console.log(findShort(word));

function findShort(string){
    return  Math.min(...string.split(' ').map(a => a.length));
}
let word = "my name is barinda system sylvere too";
console.log(findShort(word));