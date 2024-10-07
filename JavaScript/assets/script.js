let frutas = ['maçã', 'banana', 'uva', 'mexirica', 'amora', 'pêra', 'ameixa']
/*
for(let x = 0; x <= 3; x++ ) {
    console.log(frutas[x])
}
*/

let x = frutas.length;
while(x > 4) {
    frutas.pop();
}
console.log(frutas.join(' '))