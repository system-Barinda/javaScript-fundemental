
let products = [
  { name: 'ziPhone', price: 900 },
  { name: 'ASamsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
];

function compareBy(propername){
    return function(a,b){
        if( a[propername] > b[propername]){
            return 1
        }
        else if( b[propername] < a[propername]){
            return -1;
        }
        else{
            return 0;
        }
    };
}
console.table(products);
let result = products.sort(compareBy());
console.table(result)